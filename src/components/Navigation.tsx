import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/add-request">Add Request</Link>
            <Link to="/add-sale">Add Sale</Link>
            <Link to="/property">Property</Link>
            <Link to="/about">About</Link>
        </>
    )
}

export default Navigation
