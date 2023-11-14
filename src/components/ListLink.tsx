import {Link} from "react-router-dom";

export function ListLink() {
    return (
        <>
            <Link to="/">Home</Link>
            <Link to="/add-request">Add Request</Link>
            <Link to="/add-sale">Add Sale</Link>
            <Link to="/about">About</Link>
        </>
    )
}
