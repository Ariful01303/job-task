
import React, { useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Firebase/useFirebase/useAuth';


import './Header.css'


const Header = () => {
 const {user,logOut}= useAuth()
 const [isAdmin, setIsAdmin] = useState(false);

 useEffect(() => {
   fetch(`http://localhost:5000/adminCheker/${user?.email}`)
     .then((res) => res.json())
     .then((data) => {
       if (data[0]?.role === "admin") {
         setIsAdmin(true);
       } else {
         setIsAdmin(false);
       }
     });
 }, [user?.email]);
 console.log(isAdmin);
    return (
        <div>
             <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Nav.Link as ={HashLink} to="/home#home"><i class="fs-1 fas fa-home"></i></Nav.Link>

    <Navbar.Brand href="#home">Traveler Blogs</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>

    <Nav.Link as ={HashLink} to="/home#about">About Us</Nav.Link>

   
      {user?.email?
     <div className="d-flex">
          
      
          {isAdmin &&  (  <Nav.Link as ={Link} to="/dashboard">DashBoard</Nav.Link>)}
         
          <Button onClick={logOut} variant="danger"><i class="fs-5 fas fa-sign-out-alt"></i></Button>
        
     </div>
      
      :
      <Nav.Link as ={Link} to="/login"><i class="fs-1 fas fa-sign-in-alt"></i></Nav.Link>}

     { user?.email?<Navbar.Text className="d-flex ms-5"><p className="col-title">{user?.displayName} </p> {user?.photoURL?<img className="header-photo" src={user?.photoURL} alt="" />:<p className="col-title"> {user?.email}</p>}
      </Navbar.Text>
      :<p className="col-title">Please Login</p>}
    </Navbar.Collapse>
   
    </Container>
    </Navbar>
        </div>
    );
};

export default Header;