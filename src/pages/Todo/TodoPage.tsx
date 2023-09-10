import { SyntheticEvent } from 'react'
import { Header } from '@/components'
import { EditTodoModal, TodoForm, TodoList } from './components'
import { useState } from 'react'
import { ITodo } from '@/types'
import './TodoPage.css'

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [editedTodo, setEditedTodo] = useState<ITodo | null>()

  const handleAddTodo = (todo: ITodo) => {
    setTodos((prev) => [...prev, todo])
  }

  const handleDelete = (id: ITodo['id']) => {
    setTodos((prev) => prev.filter((item) => item.id !== id))
  }

  const handleCompliteChange = (
    id: string,
    event: SyntheticEvent<HTMLElement>
  ) => {
    event.stopPropagation()

    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complited: !item.complited,
          }
        }

        return item
      })
    )
  }

  const handleEditModeOn = (todo: ITodo) => {
    setEditedTodo(todo)
  }

  const handleEditModeOff = () => {
    setEditedTodo(null)
  }

  const handleEditTodo = (id: string, newText: string) => {
    if (!newText) {
      return
    }
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, text: newText }
        }

        return item
      })
    )
    handleEditModeOff()
  }

  return (
    <div className="todo-page">
      <div className="page-wrapper">
        <Header />
        <TodoForm handleAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          handleDelete={handleDelete}
          handleCompliteChange={handleCompliteChange}
          handleEditModeOn={handleEditModeOn}
        />
      </div>
      {editedTodo && (
        <EditTodoModal
          isShown={!!editedTodo}
          todo={editedTodo}
          onClose={handleEditModeOff}
          handleEditTodo={handleEditTodo}
        />
      )}
    </div>
  )
}

export default TodoPage
