import { urls } from '@/consts'
import { Link } from 'react-router-dom'
import './MainPage.css'

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="main-page-content">
        <h2>Welcome</h2>
        <Link to={urls.auth}>Form [task 1]</Link>
        <Link to={urls.todo}>Todo [task 2]</Link>
        <Link to={urls.cropper}>Cropper [task 3]</Link>
      </div>
    </div>
  )
}

export default MainPage
