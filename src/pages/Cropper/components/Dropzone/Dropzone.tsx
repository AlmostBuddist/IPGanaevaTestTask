import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import cn from 'classnames'
import { ImportIcon } from 'evergreen-ui'
import './Dropzone.css'

interface IDropzone {
  handleAddFile: (file: File) => void
}

const Dropzone: React.FC<IDropzone> = ({ handleAddFile }) => {
  const onDrop = useCallback((files: File[]) => {
    if (!files.length) {
      return
    }

    handleAddFile(files[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': ['.jpg', '.png', '.jpeg'] },
    maxFiles: 1,
  })

  return (
    <div
      {...getRootProps({
        className: cn('dropzone', { 'active-drag': isDragActive }),
      })}
    >
      <input {...getInputProps()} />
      <div className="dropzone-content">
        <ImportIcon color="info" />
        <p>Положите или выберите файл</p>
      </div>
    </div>
  )
}

export default Dropzone
