import './Footer.css';
import React from 'react';

const tel = "(62)3225-3219"
const Footer = (props) =>

   <footer className="footer">
      <div className="icons">
         <a className="aFooter" href="https://www.instagram.com/contabilidadehavai/">
            <i className="fa fa-brands fa-instagram"><p>@contabilidadehavai</p></i>
         </a>
         <a className="aFooter" href="https://www.facebook.com/contabilidadehavai">
            <i className="fa fa-brands fa-facebook-square"><p>/contabilidadehavai</p></i>
         </a>
         <a className="aFooter"><i className="fa fa-solid fa-phone"><p>{tel}</p></i></a>
      </div>
   </footer>
export default Footer;

