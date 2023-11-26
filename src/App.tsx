import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Spinner from './components/Spinner'
import './assets/scss/app.scss'
import app from '../package.json'

// Pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import AddRequest from './pages/AddRequest'
import AddSale from './pages/AddSale'
import Property from './pages/Property'
import Template from './pages/Template'
import About from './pages/About'
import NoMatch from './pages/404'
import SelectLocation from './pages/SelectLocation'
import Request from './pages/Request'

function App() {
    return (
        <BrowserRouter basename={app.name}>
            <React.Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="add-request" element={<Request/>}>
                            <Route index element={<AddRequest/>}/>
                            <Route path="select-location" element={<SelectLocation/>}/>
                        </Route>
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
