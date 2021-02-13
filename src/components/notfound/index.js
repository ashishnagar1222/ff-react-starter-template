import React from 'react';
import './style.css'
import logo from "../../assets/logo.png";

export default function NotFound(props) {
    return (
        <div className="mx-auto signupform shadow bg-white rounded form-width text-capitalize pb-5 my-5">
            <div className="text-center p-5 pb-0">
            <img src={logo} alt='...' height='100px' width='100px' />
                <h1>404 Error</h1>
                <p className="text-muted text-center">Page Not Found</p>
            </div>
        </div>
    )
}