import {Link, useLocation} from 'react-router-dom'

function getPathName() {
    const location = useLocation
    const path = location().pathname.split('/')

    return path[path.length - 1]
}

function Navigation() {
    return (
        <>
            <h2>{getPathName().replace('-', ' ').toUpperCase()}</h2>
            <Link to="/">Home</Link>
            <Link to="/add-request">Add Request</Link>
            <Link to="/add-sale">Add Sale</Link>
            <Link to="/property">Property</Link>
            <Link to="/about">About</Link>
        </>
    )
}

export default Navigation
