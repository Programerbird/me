import React from 'react'
import './NavBar.css'
import Button  from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from '../image/logo.jpg'
import Avatar from '@mui/material/Avatar';

function NavBar() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'  >
        <Container style={{
            // "backgroundColor": "red" 
            }} >
            <Navbar.Brand style={{
                //  "backgroundColor": "green", "width":"1000px" 
                 }} >
            <Avatar className='avatar' alt="Remy Sharp" src={logo} />
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse style={{
                //  "backgroundColor": "pink"
                 }} >
                <Nav className='me-auto my-2 my-lg-0'style={{"maxHeight": "100px",}} 
                navbarScroll >
                 <NavLink className="nav-link" to="/">Home</NavLink>
                 <NavLink className="nav-link" to="/watchList">Sign Out</NavLink>   
                </Nav>
                <Button variant="outline-info" className="me-2">Chat</Button>
                <Button variant="outline-info">Anime</Button>
                <Button variant="outline-info">Manga</Button>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar
