import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'


const Nav = (props) => 
 <aside className="menu-area">
     <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="logo" width="80" height="80"/>
        </a>
    </aside>
     <nav className="menu">
         <Link  to="/">
             <i className="fa fa-home"></i>Início
         </Link>
         <Link  to="/grupos">
             <i className="fa fa-handshake-o"></i>Grupos
         </Link>
         <Link to="/dashboard">
            <i className="fa fa-dashboard"> </i>Dashboard
         </Link>
     </nav>
 </aside>   
export default Nav;
