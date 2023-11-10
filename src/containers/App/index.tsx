import React from 'react'
import {Link, Route, Routes, useLocation} from 'react-router-dom'
import Home from '../../pages/Home.tsx'
import About from '../../pages/About.tsx'
import Spinner from '../../components/Spinner'
import './_app.scss'

const NoMatch = () => <div>No match</div>

const LocationDisplay = () => {
    const location = useLocation()
    return <div data-testid="location-display">{location.pathname}</div>
}

function Index() {
    return (
        <React.Suspense fallback={<Spinner/>}>
            <div id="app">
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
    )
}

export default Index

/*<div className="Index">
  <header className="Index-header">
    <img src={logo} className="Index-logo" alt="logo" />
    <p>
      Edit <code>src/Index.js</code> and save to reload.
    </p>
    <a
      className="Index-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div>*/
/*
const About = () => <div>You are on the about page</div>
const Home = () => <div>You are home</div>
const NoMatch = () => <div>No match</div>

const LocationDisplay = () => {
  const location = useLocation()
  return <div data-testid="location-display">{location.pathname}</div>
}

function Index() {
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

export default Index


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

function Index() {
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

export default Index;
*/
/*function Index() {
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
          Edit <code>src/index.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/
