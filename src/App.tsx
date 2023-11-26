import React from 'react'
import {BrowserRouter, Outlet, Route, Routes} from 'react-router-dom'
import Spinner from './components/Spinner'
import './assets/scss/app.scss'
import app from '../package.json'

// Pages
import Home from './pages/Home'
import AddRequest from './pages/AddRequest'
import AddSale from './pages/AddSale'
import Property from './pages/Property'
import Template from './pages/Template'
import About from './pages/About'
import NoMatch from './pages/404'
import SelectLocation from './pages/SelectLocation'

function Layout() {
    return (
        <>
            <Outlet/>
        </>
    )
}

function App() {
    return (
        <BrowserRouter basename={app.name}>
            <React.Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="add-request" element={<AddRequest/>}/>
                        <Route path="select-location" element={<SelectLocation/>}/>
                        <Route path="add-sale" element={<AddSale/>}/>
                        <Route path="property" element={<Property/>}/>
                        <Route path="template" element={<Template/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default App
