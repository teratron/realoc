import {NavLink, useLocation} from 'react-router-dom'

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
                <NavLink to="/">Home</NavLink>
                <NavLink to="/add-request">Add Request</NavLink>
                <NavLink to="/add-sale">Add Sale</NavLink>
                <NavLink to="/property">Property</NavLink>
                <NavLink to="/template">Template</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </>
    )
}

export default Navigation
