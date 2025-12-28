import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import Overview from '../components/Overview'
import TripDetail from '../components/TripDetail'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Overview />} />
                    <Route path="/detail/:id" element={<TripDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
