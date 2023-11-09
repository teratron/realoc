import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './containers/App.tsx'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
)
