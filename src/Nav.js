import React from "react";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Nav =() => {
    return(
        <ul className="nav nav-pills">
            <li className="nav-item">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" exact to="/posts">Posts</NavLink>
            </li>

            <li className="nav-item">
                <NavLink className="nav-link" exact to="/posts/form">New Post</NavLink>
            </li>
        </ul>
    )
};

export default Nav;