import { ITodo } from '@/types'
import TodoItem, { ITodoItem } from '../TodoItem/TodoItem'

interface ITodoList extends Omit<ITodoItem, 'todo'> {
  todos: ITodo[]
}

const TodoList: React.FC<ITodoList> = ({ todos, ...todoItemProps }) => {
  if (!todos.length) {
    return <div className="todo-list-wrapper">Список пуст</div>
  }

  return (
    <div className="todo-list-wrapper">
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} {...todoItemProps} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList
