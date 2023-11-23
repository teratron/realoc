import React from 'react'
import {Outlet, Route, Routes, BrowserRouter} from 'react-router-dom'
import Spinner from './components/Spinner.tsx'
import './assets/scss/app.scss'

// Pages
import Home from './pages/Home.tsx'
import AddRequest from './pages/AddRequest.tsx'
import AddSale from './pages/AddSale.tsx'
import Property from './pages/Property.tsx'
import About from './pages/About.tsx'
import NoMatch from './pages/404.tsx'

function Layout() {
    return <Outlet/>
}

function App() {
    return (
        <BrowserRouter basename="/realoc">
            <React.Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/add-request" element={<AddRequest/>}/>
                        <Route path="/add-sale" element={<AddSale/>}/>
                        <Route path="/property" element={<Property/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default App
