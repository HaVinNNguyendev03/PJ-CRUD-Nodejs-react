import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState,useEffect } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
// import Cookies from 'js-cookie'
// import Logout from '../Views/Logout';
// import Home from '../Views/Home';
import UserIcon from './UserIcon';
import  './main.css'
const Header = () => {
  const [StateLogin,setStateLogin] = useState('')
  useEffect(() => {
    axios.get('http://localhost:9000/',
      {withCredentials: true}
    )
  .then(res => {
    console.log(res);
    if(res.data.Status === 'Success') {
      setStateLogin('true');
    } 
   })
  },[])
 
    
  
    return (
        <Navbar className='height-50' bg="light " expand="lg">
            <Container>
                <NavLink to="/">LogoBlog</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/Home" className='nav-link'>Home</NavLink>
                        <NavLink to="/Pages" className='nav-link'>Pages</NavLink>
                    </Nav>
                </Navbar.Collapse>
                { StateLogin ? <NavLink to="/User" className='nav-link'><UserIcon/></NavLink> : <NavLink to="/Login" className='nav-link'>Đăng Nhập</NavLink>}
            </Container>
        </Navbar>
    );
}

export default Header;