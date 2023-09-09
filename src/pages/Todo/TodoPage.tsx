import { SyntheticEvent } from 'react'
import { Header } from '@/components'
import { TodoForm, TodoList } from './components'
import { useState } from 'react'
import { ITodo } from '@/types'
import './TodoPage.css'

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [editItemId, setEditItemId] = useState<string>()

  const handleAddTodo = (todo: ITodo) => {
    setTodos((prev) => [...prev, todo])
  }

  console.log(todos)

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

  const handleEditModeOn = (id: ITodo['id']) => {
    setEditItemId(id)
  }

  const handleEditModeOff = () => {
    setEditItemId(undefined)
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
          editId={editItemId}
          handleDelete={handleDelete}
          handleCompliteChange={handleCompliteChange}
          handleEditTodo={handleEditTodo}
          handleEditModeOn={handleEditModeOn}
          handleEditModeOff={handleEditModeOff}
        />
      </div>
    </div>
  )
}

export default TodoPage
