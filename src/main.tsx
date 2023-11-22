import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './containers/App'
//basename="/realoc"
ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <Router>
            <App/>
        </Router>
    </React.StrictMode>
)
