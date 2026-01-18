import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from '../components/AppLayout'
import Overview from '../components/Overview'
import TripDetail from '../components/TripDetail'
import Settings from '../components/Settings'
import Packing from '../components/Packing'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Overview />} />
                    <Route path="/detail/:id" element={<TripDetail />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/packing" element={<Packing />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
