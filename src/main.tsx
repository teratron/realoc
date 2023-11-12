import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './containers/App'

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <Router basename="/realoc">
            <App/>
        </Router>
    </React.StrictMode>
)
