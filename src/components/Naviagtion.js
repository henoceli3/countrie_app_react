import React from 'react';
import { NavLink } from 'react-router-dom';
const Naviagtion = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Acceuil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>à propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Naviagtion;