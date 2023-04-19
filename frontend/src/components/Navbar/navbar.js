import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <p className="navbar-brand">Sprig and Stiple</p>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Store
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/uploadListing">
                                Upload Listing
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="d-flex">
                    <p>My cart</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar