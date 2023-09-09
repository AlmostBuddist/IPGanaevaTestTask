import { urls } from '@/consts'
import { Link } from 'react-router-dom'

const MainPage = () => {
    return (
        <div className="main-page">
            <Link to={urls.auth}>to Auth [page 1]</Link>
            <Link to={urls.todo}>Todo [page 2]</Link>
            <Link to={urls.cropper}>Cropper [page 3]</Link>
        </div>
    )
}

export default MainPage
