import React, { ChangeEvent, useState } from 'react'

import { Dialog, DialogProps, TextInputField } from 'evergreen-ui'
import { ITodo } from '@/types'

interface IEditTodoModal {
  isShown: boolean
  todo: ITodo
  onClose: () => void
  handleEditTodo: (id: string, newText: string) => void
}

const title = 'Редактирование задачи'

const EditTodoModal: React.FC<IEditTodoModal> = ({
  isShown,
  todo,
  onClose,
  handleEditTodo,
}) => {
  const [newText, setNewText] = useState<string>(todo.text)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setNewText(value)
  }

  const onConfirm = () => {
    handleEditTodo(todo.id, newText)
  }

  return (
    <Dialog
      isShown={isShown}
      title={title}
      onCloseComplete={onClose}
      isConfirmDisabled={!newText}
      onConfirm={onConfirm}
    >
      <TextInputField onChange={handleChange} value={newText} />
    </Dialog>
  )
}

export default EditTodoModal
