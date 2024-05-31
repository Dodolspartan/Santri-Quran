import React from "react";
import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

// Import Data MenuLinks
import { navLink } from "../API/index";

function NavbarComponent() {
  return (
    <div className="nav_element_component">
      <Navbar fixed="bottom" className="justify-content-center">
        {navLink.map((nav) => (
          <Nav className="justify-content-center" key={nav.id}>
            <NavLink
              to={nav.path}
              className="nav-link text-center mx-4"
              ClassName="active-link">
              <div className="icon_element">
                <img src={nav.icon} alt={`${nav.title} icon`} />
              </div>
              {nav.title}
            </NavLink>
          </Nav>
        ))}
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
