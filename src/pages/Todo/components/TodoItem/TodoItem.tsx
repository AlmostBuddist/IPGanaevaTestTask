import { ChangeEvent, SyntheticEvent, useState } from 'react'
import { ITodo } from '@/types'
import { IconButton, Checkbox, TextInputField } from 'evergreen-ui'
import { TrashIcon, EditIcon, CrossIcon, SmallTickIcon } from 'evergreen-ui'
import cn from 'classnames'
import './TodoItem.css'

export interface ITodoItem {
  todo: ITodo
  handleEditModeOn: (id: ITodo) => void
  handleDelete: (id: string) => void
  handleCompliteChange: (id: string, event: SyntheticEvent<HTMLElement>) => void
}

const TodoItem: React.FC<ITodoItem> = ({
  todo,
  handleEditModeOn,
  handleDelete,
  handleCompliteChange,
}) => {
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
        <div className="todo-item-content">{todo.text}</div>
      </div>
      <div className="todo-item-actions">
        <IconButton
          icon={EditIcon}
          onClick={(event: SyntheticEvent<HTMLButtonElement>) => {
            event.stopPropagation()
            handleEditModeOn(todo)
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
      </div>
    </li>
  )
}

export default TodoItem
