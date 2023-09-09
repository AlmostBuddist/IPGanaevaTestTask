import { ITodo } from '@/types'
import { Button, TextInputField } from 'evergreen-ui'
import { useForm } from 'react-hook-form'
import { texts } from '../../consts'
import './TodoForm.css'

interface ITodoForm {
  handleAddTodo: (todo: ITodo) => void
}

const TodoForm: React.FC<ITodoForm> = ({ handleAddTodo }) => {
  const { register, handleSubmit, resetField } = useForm()

  const onSubmit = (data: any) => {
    if (!data[texts.input.key]) {
      return
    }

    handleAddTodo({
      id: Date.now().toString(),
      text: data[texts.input.key],
      complited: false,
    })
    resetField(texts.input.key)
  }

  return (
    <div className="todo-form-wrapper">
      <h2>Добавить задачу</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
        <TextInputField
          {...register(texts.input.key)}
          placeholder={texts.input.placeholder}
        />
        <Button appearance="primary">{texts.button.label}</Button>
      </form>
    </div>
  )
}

export default TodoForm
