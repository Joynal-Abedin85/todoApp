import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaBars, FaSearch, FaList, FaMoon } from 'react-icons/fa';

const AppNavbar = () => {
    return (
        <Navbar  bg="light" className="shadow-sm px-3">
            <Container fluid>
                {/* Left Side - Hamburger + App Name */}
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <FaBars className="me-2" style={{ cursor: 'pointer' }} />
                    <span className="fw-bold">To-Do App</span>
                </Navbar.Brand>

                {/* Right Side - Icons */}
                <Nav className="ms-auto d-flex align-items-center">
                    <Nav.Link href="#" className="text-dark">
                        <FaSearch />
                    </Nav.Link>
                    <Nav.Link href="#" className="text-dark">
                        <FaList />
                    </Nav.Link>
                    <Nav.Link href="#" className="text-dark">
                        <FaMoon />
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
