import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Spinner from '../../components/Spinner'
import './app.scss'

// Pages
import Home from '../../pages/Home'
import AddRequest from '../../pages/AddRequest'
import AddSale from '../../pages/AddSale'
import Property from '../../pages/Property'
import About from '../../pages/About'
import NotFound from '../../pages/404'

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add-request" element={<AddRequest/>}/>
                <Route path="/add-sale" element={<AddSale/>}/>
                <Route path="/property" element={<Property/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </React.Suspense>
    )
}

export default App
