import React from 'react'
import {Route, Routes} from 'react-router-dom'
import '@popperjs/core'
import Home from '../../pages/Home.tsx'
import About from '../../pages/About.tsx'
import Add from '../../pages/Add.tsx'
import Spinner from '../../components/Spinner'
import './_app.scss'

const NoMatch = () => <div>No match</div>

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/add" element={<Add/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
        </React.Suspense>
    )
}

export default App
