// src/components/Navbar.js
import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaBars, FaSearch, FaList, FaMoon } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import { logout } from '../firebase.init.js';

const AppNavbar = () => {
    const { user } = useContext(AuthContext);

    return (
        <Navbar expand="lg" bg="light" className="shadow-sm px-3">
            <Container fluid>
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <FaBars className="me-2" />
                    <span className="fw-bold">To-Do App</span>
                </Navbar.Brand>

                <Nav className="ms-auto d-flex align-items-center">
                    <Nav.Link href="#"><FaSearch /></Nav.Link>
                    <Nav.Link href="#"><FaList /></Nav.Link>
                    <Nav.Link href="#"><FaMoon /></Nav.Link>

                    {user && (
                        <Button variant="outline-danger" className="ms-2" onClick={logout}>
                            Logout
                        </Button>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
