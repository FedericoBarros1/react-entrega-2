
import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget } from '../Components/CartWidget';
import logo from '../assets/logo.png'; // Ruta de la imagen del logo

const Navbar = () => {
    return (
        <header className="header navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/home" className="navbar-brand">
                <img src={logo} alt="Logo de la tienda" style={{ width: '200px', height: 'autopx' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/accesorios" className="nav-link">Error</Link>
                    </li>
                    
                </ul>
            </div>
            <CartWidget />
        </header>
    );
};

export default Navbar;
