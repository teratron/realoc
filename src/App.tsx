import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Spinner from './components/Spinner'
import './scss/app.scss'

// Pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import AddRequest from './pages/AddRequest'
import AddSale from './pages/AddSale'
import Property from './pages/Property'
import Template from './pages/Template'
import About from './pages/About'
import NoMatch from './pages/404'
import Request from './pages/Request'

export default function App() {
    return (
        <HashRouter>
            <React.Suspense fallback={<Spinner/>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="add-request" element={<Request/>}>
                            <Route index element={<AddRequest/>}/>
                        </Route>
                        <Route path="add-sale" element={<AddSale/>}/>
                        <Route path="property" element={<Property/>}/>
                        <Route path="template" element={<Template/>}/>
                        <Route path="about" element={<About/>}/>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            </React.Suspense>
        </HashRouter>
    )
}
