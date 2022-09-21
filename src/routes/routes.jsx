import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../home'
import { OurMenu } from '../components/OurMenu'

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>    
                <Route path='/our-menu' element={<OurMenu/>}/>    
            </Routes> 
        </BrowserRouter>
    )
}