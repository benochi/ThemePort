import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import "./Navigation.css";

function Navigation(){
  return (
    <nav className="Nav border border-white">
      <NavbarBrand className="NavBrand" href="/">Theme page</NavbarBrand>
      <Navbar expand="md" sticky="top">
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink to="/theme1">Theme 1</NavLink>
            <NavLink to="/theme2">Theme 2</NavLink>
            <NavLink to="/theme3">Theme 3</NavLink>
            <NavLink to="/theme4">Theme 4</NavLink>
            <NavLink to="/theme5">Theme 5</NavLink>
            <NavLink to="/theme6">Theme 6</NavLink>
          </NavItem>  
        </Nav>
      </Navbar>
    </nav> 
  )
}

export default Navigation;