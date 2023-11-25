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
            <div className="vstack gap-2 mx-2">
                <Link to="/">Home</Link>
                <Link to="/add-request">Add Request</Link>
                <Link to="/add-sale">Add Sale</Link>
                <Link to="/property">Property</Link>
                <Link to="/template">Template</Link>
                <Link to="/about">About</Link>
            </div>
        </>
    )
}

export default Navigation
