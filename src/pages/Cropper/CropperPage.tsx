import { Header } from '@/components'
import { CropperComponent, Dropzone } from './components'
import { useEffect, useState } from 'react'
import './CropperPage.css'

export interface Image {
  type?: string
  src: string
}

const CropperPage = () => {
  const [image, setImage] = useState<Image>()

  const handleAddFile = (file: File) => {
    const blob = URL.createObjectURL(file)

    setImage({ src: blob, type: file.type })
  }

  useEffect(() => {
    return () => {
      if (image && image.src) {
        URL.revokeObjectURL(image.src)
      }
    }
  }, [image])

  return (
    <main className="cropper-page">
      <div className="cropper-page-content">
        <Header />
        <Dropzone handleAddFile={handleAddFile} />
        {image?.src && <CropperComponent src={image.src} />}
      </div>
    </main>
  )
}

export default CropperPage
