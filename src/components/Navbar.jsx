import React from 'react';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="flex gap-5"
        >
            <NavLink to="/"
                     className={({ isActive }) =>
                         isActive ? "text-red-500" : "text-black"
                     }
            >
                Home
            </NavLink>
            <NavLink to="/about"
                     className={({ isActive }) =>
                         isActive ? "text-red-500" : "text-black"
                     }
            >
                About
            </NavLink>
            <NavLink to="/contact"
                     className={({ isActive }) =>
                         isActive ? "text-red-500" : "text-black"
                     }
            >
                Contact
            </NavLink>
            <NavLink to="/cart"
                     className={({ isActive }) =>
                         isActive ? "text-red-500" : "text-black"
                     }
            >
                Cart
            </NavLink>
        </nav>
    );
}

export default Navbar;