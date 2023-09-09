import { Route, Routes } from 'react-router-dom'
import { AuthPage, MainPage, TodoPage } from '@pages/index'
import { urls } from '@/consts'

const ProjectRoutes = () => {
    return (
        <Routes>
            <Route path={urls.root} element={<MainPage />} />
            <Route path={urls.auth} element={<AuthPage />} />
            <Route path={urls.todo} element={<TodoPage />} />
            <Route path={urls.cropper} element={<div>cropper</div>} />
        </Routes>
    )
}

export default ProjectRoutes
