import React from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import Spinner from '../components/Spinner'
import '../assets/scss/app.scss'

// Pages
import Home from '../pages/Home'
import AddRequest from '../pages/AddRequest'
import AddSale from '../pages/AddSale'
import Property from '../pages/Property'
import About from '../pages/About'
import NoMatch from '../pages/404'

function Layout() {
    return <Outlet/>
}

function App() {
    return (
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
    )
}

export default App
