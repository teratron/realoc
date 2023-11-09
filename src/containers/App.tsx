import React from 'react'
import {Link, Route, Routes, useLocation} from 'react-router-dom'
import './App.css'

const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

const LocationDisplay = () => {
    const location = useLocation()
    return <div data-testid="location-display">{location.pathname}</div>
}

function App() {
    return (
        <React.Component>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
                <LocationDisplay/>
            </div>
        </React.Component>
    )
}

export default App

/*
import {Route, Routes} from 'react-router-dom';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Map from './pages/Map';
import Blog from './pages/Blog';
import About from './pages/About';

import Spinner from './components/Spinner';
import './static/scss/app.scss';

//const Home = React.lazy(() => import('./pages/Home'));
//const About = React.lazy(() => import('./pages/About'));

function App() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div className="app">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="catalog" element={<Catalog/>}/>
                    <Route path="map" element={<Map/>}/>
                    <Route path="blog" element={<Blog/>}/>
                    <Route path="about" element={<About/>}/>
                </Routes>
            </div>
        </React.Suspense>
    );
}

export default App;
* */