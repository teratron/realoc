//import { useState } from 'react'
//import reactLogo from '../assets/media/logo_realoc.png'
//import viteLogo from '../assets/media/plug_room_01.jpg'
import React from 'react'
import {Link, Route, Routes, useLocation} from 'react-router-dom'

import Home from '../pages/Home.tsx'
//import Catalog from './pages/Catalog'
//import Map from './pages/Map'
//import Blog from './pages/Blog'
import About from '../pages/About.tsx'
import Spinner from '../components/Spinner'
import '../assets/css/App.css'

//const Home = React.lazy(() => import('./pages/Home'));
//const About = React.lazy(() => import('./pages/About'));

//const About = () => <div>You are on the about page</div>
//const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

const LocationDisplay = () => {
    const location = useLocation()
    return <div data-testid="location-display">{location.pathname}</div>
}

function App() {
    return (
    <React.Suspense fallback={<Spinner/>}>
        <div className="app">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
            <LocationDisplay/>
        </div>
    </React.Suspense>
        /*<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>*/
    )
}

export default App

/*
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

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/
