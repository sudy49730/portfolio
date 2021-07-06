import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavbarComponent extends Component {
    render() {
        return (
            <div className="col-md-7 mb-2 mt-0">
                <NavLink exact
                    to={'/portfolio/'}
                    className="custom-nav-link"
                    activeClassName="active-custom-nav-link">
                    Home
                </NavLink>
                <NavLink exact
                    to={'/portfolio/about'}
                    className="custom-nav-link"
                    activeClassName="active-custom-nav-link">
                    About
                </NavLink>
                <NavLink exact
                    to={'/portfolio/resume'}
                    className="custom-nav-link"
                    activeClassName="active-custom-nav-link">
                    Resume
                </NavLink>
                <NavLink exact
                    to={'/portfolio/contact'}
                    className="custom-nav-link"
                    activeClassName="active-custom-nav-link">
                    Contact
                </NavLink>
            </div>
        );
    }
}

export default NavbarComponent;