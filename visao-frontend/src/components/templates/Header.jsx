import './Header.css';
import React from 'react';

const Header = (props) =>
    <header className="header d-none d-sm-flex flex-column">
        <h2 className="mt-3">
        <i className={`fa fa-${props.icon}`}></i>{props.title}
        </h2>
    </header>
export default Header
