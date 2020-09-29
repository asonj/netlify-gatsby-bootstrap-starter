import React from "react";
import { Link } from "gatsby";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../img/logo.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";
// import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const NavbarComponent = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" fixed="top" className="navbar">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} width="50" height="auto" className="d-inline-block align-top" alt="SEMCO STYLE USA" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <AnchorLink to="/#aboutUs">ABOUT US</AnchorLink>
              </Nav.Link>
              <NavDropdown title="SOLUTIONS" id="collasible-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/consultancy-certification-program">BECOME A CERTIFIED EXPERT</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/consulting">CONSULTING</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Item>
                  <Link to="/training-programs">TRAINING PROGRAMS</Link>
                </NavDropdown.Item> */}
              </NavDropdown>
              <NavDropdown title="INSPIRATION" id="collasible-nav-dropdown-2">
                <NavDropdown.Item>
                  <Link to="/e-book-ten-myths">E-BOOK - THE TOP TEN MYTHS</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/e-book-everyones-a-boss">E-BOOK - EVERYONE'S A BOSS</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <AnchorLink to="/events">EVENTS</AnchorLink>
              </Nav.Link>
              <Nav.Link>
                <AnchorLink to="/blog">BLOG</AnchorLink>
              </Nav.Link>
              <Nav.Link className="nav-link" role="button">
                <AnchorLink to="/#contact">CONTACT</AnchorLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

export default NavbarComponent;
