import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// A crutch for problem 404 on GitHub Pages
import './assets/ts/location.ts'

ReactDOM.createRoot(document.getElementById('app')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
