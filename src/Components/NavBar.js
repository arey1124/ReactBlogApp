import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import {Link } from 'react-router-dom';







class NavBar extends Component {
render() {
    return (

      	<Nav bsStyle="pills" justified>
                <NavItem eventKey={1} ><Link exact activeClassName ='active' to='/'> Home</Link></NavItem>
                <NavItem eventKey={2} ><Link activeClassName ='active' to='/onlineblogs'> Online Blogs </Link></NavItem>
                <NavItem eventKey={3} ><Link activeClassName ='active' to={'/login'}> Login</Link></NavItem>
                
         </Nav>

        
    );
  }
}

export default NavBar;