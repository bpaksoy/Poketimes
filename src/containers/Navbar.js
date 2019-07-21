import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
    // console.log(props);
    // setTimeout(() => {
    //     props.history.push("/about")
    // }, 2000)
    return (
        <nav>
            <div className="nav-wrapper darken-3">
                <div className="container">
                    <a className="brand-logo">Poke'Times</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);