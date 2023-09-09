import { useRef } from 'react'
import {
  Cropper,
  CropperPreview,
  CropperPreviewRef,
  CropperRef,
} from 'react-advanced-cropper'
import './Cropper.css'
import {
  EyeOpenIcon,
  IconButton,
  ImageRotateLeftIcon,
  ImageRotateRightIcon,
} from 'evergreen-ui'

interface ICropperComponent {
  src: string
}

const CropperComponent: React.FC<ICropperComponent> = ({ src }) => {
  const previewRef = useRef<CropperPreviewRef>(null)
  const cropperRef = useRef<CropperRef>(null)

  const onUpdate = () => {
    previewRef.current?.refresh()
  }

  const onOpen = () => {
    const cropper = cropperRef.current

    if (cropper) {
      const canvas = cropper.getCanvas()
      const newTab = window.open()

      if (newTab && canvas) {
        newTab.document.body.innerHTML = `<img src="${canvas.toDataURL()}"></img>`
      }
    }
  }

  const onRotate = (agile: number) => {
    if (cropperRef.current) {
      cropperRef.current.rotateImage(agile)
    }
  }

  return (
    <div className="cropper-wrapper">
      <Cropper
        ref={cropperRef}
        className="cropper"
        stencilProps={{ aspectRatio: 1 }}
        src={src}
        onUpdate={onUpdate}
      />
      <div className="preview-content">
        <CropperPreview
          ref={previewRef}
          cropper={cropperRef}
          className="preview"
        />
        <IconButton icon={EyeOpenIcon} onClick={onOpen} />
        <IconButton icon={ImageRotateRightIcon} onClick={() => onRotate(90)} />
        <IconButton icon={ImageRotateLeftIcon} onClick={() => onRotate(-90)} />
      </div>
    </div>
  )
}

export default CropperComponent
