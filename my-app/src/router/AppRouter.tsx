import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import Overview from '../components/Overview'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Overview />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
