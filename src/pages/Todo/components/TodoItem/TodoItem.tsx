import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ITodo } from '@/types'
import { IconButton, Checkbox, TextInputField } from 'evergreen-ui'
import { TrashIcon, EditIcon, CrossIcon, SmallTickIcon } from 'evergreen-ui'
import cn from 'classnames'
import './TodoItem.css'

export interface ITodoItem {
  todo: ITodo
  editId: ITodo['id'] | undefined
  handleEditModeOn: (id: string) => void
  handleEditModeOff: () => void
  handleDelete: (id: string) => void
  handleEditTodo: (id: string, newText: string) => void
  handleCompliteChange: (id: string, event: SyntheticEvent<HTMLElement>) => void
}

const TodoItem: React.FC<ITodoItem> = ({
  todo,
  editId,
  handleEditModeOn,
  handleEditModeOff,
  handleDelete,
  handleEditTodo,
  handleCompliteChange,
}) => {
  const [text, setText] = useState(todo.text)

  const isEdit = todo.id === editId

  return (
    <li
      className={cn('todo-item', { checked: todo.complited })}
      onClick={(event) => handleCompliteChange(todo.id, event)}
    >
      <div className="todo-item-main">
        <Checkbox
          checked={todo.complited}
          onChange={(event) => handleCompliteChange(todo.id, event)}
        />
        {isEdit ? (
          <TextInputField
            value={text}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setText(event.target.value)
            }
            onClick={(event: SyntheticEvent<HTMLInputElement>) => {
              event.stopPropagation()
            }}
          />
        ) : (
          <div className="todo-item-content">{todo.text}</div>
        )}
      </div>
      <div className="todo-item-actions">
        {isEdit ? (
          <>
            <IconButton
              icon={SmallTickIcon}
              intent="success"
              onClick={(event: SyntheticEvent<HTMLButtonElement>) => {
                handleEditTodo(todo.id, text)
                event.stopPropagation()
              }}
            />
            <IconButton
              icon={CrossIcon}
              intent="danger"
              onClick={(event: SyntheticEvent<HTMLButtonElement>) => {
                event.stopPropagation()
                handleEditModeOff()
              }}
            />
          </>
        ) : (
          <>
            <IconButton
              icon={EditIcon}
              onClick={(event: SyntheticEvent<HTMLButtonElement>) => {
                event.stopPropagation()
                handleEditModeOn(todo.id)
              }}
            />
            <IconButton
              icon={TrashIcon}
              intent="danger"
              onClick={(event: SyntheticEvent<HTMLButtonElement>) => {
                event.stopPropagation()
                handleDelete(todo.id)
              }}
            />
          </>
        )}
      </div>
    </li>
  )
}

export default TodoItem
