import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Spinner from '../../components/Spinner'
import './app.scss'

// Pages
import Home from '../../pages/Home'
import About from '../../pages/About'
import Add from '../../pages/Add'
import NotFound from '../../pages/404'

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </React.Suspense>
    )
}

export default App
