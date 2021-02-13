import React from 'react';
import './style.css';
import logo from "../../assets/logo.png";


export default function Profile(props) {
    return (
        <div className="mx-auto signupform shadow bg-white rounded form-width text-capitalize my-5">
            <div className="text-center p-5 pb-0">
                <h1 className="pb-3">Sanjay Sharma</h1>
                <img src={logo} alt='...' height='100px' width='100px' />
            </div>
            <div className="p-5">
                <form>
                    <div className="row">
                    <p className="text-muted text-center">Name: <strong>Sanjay</strong></p><hr />
                    <p className="text-muted text-center">Surname <strong>Sharma</strong></p><hr />
                    <p className="text-muted text-center">ID: <strong>#1</strong></p><hr />
                    <p className="text-muted text-center">Level <strong>premium</strong></p><hr />

                    </div>
                </form>
            </div>
        </div>
    )
}