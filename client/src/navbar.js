import React,{Component} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navbar.css";
import { Link } from "react-scroll";

class Navba extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
  return (
    <div className="main_banner sticky-top">

                <Navbar dark expand="md" className="navbar p-3 navbar-dark transparent-nav nav-js">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><Link className="navbar-brand" href="/" activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500}>
                          CLOCK
                        </Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                            <Link className="nav-item nav-link" activeClass="active"
                            to="date_time"
                            spy={true}
                            smooth={true}
                            offset={-200}
                            duration={500}>
                              Home <span className="sr-only">(current)</span>
                            </Link>
                            </NavItem>
                            <NavItem>
                            <Link
                            className="nav-item nav-link"
                              activeClass="active"
                              to="date_time"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >Indian Time</Link>
                            </NavItem>
                            <NavItem>
                            <Link
                            className="nav-item nav-link"
                              activeClass="active"
                              to="world_clock"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >World Clock</Link>
                            </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>


    </div>
  );
}
}

export default Navba;
