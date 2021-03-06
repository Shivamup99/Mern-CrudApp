import React from 'react'
import {Link , NavLink} from 'react-router-dom'

function Navbar() {
    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="#">UserData</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item">
    <NavLink className="nav-link" to="/list">Home </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/add">Create</NavLink>
    </li>
    </ul>
    </div>
    <Link className="btn btn-outline-primary mr-5" to="/add">Add User</Link>
    </nav>
    </div>
    )
}

export default Navbar
