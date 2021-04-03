import React from 'react';
import logo from '../images/logo.png';
import '../App.css';

export default function Logo() {
    return (
        <div className="logo-container">
            <img className="logo" src={logo} alt="bingo-logo" />
        </div>
    );
}
