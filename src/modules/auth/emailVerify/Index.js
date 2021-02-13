import React from 'react';
import './style.css'
import logo from "../../../assets/logo.png";

export default function EmailVerify(props) {
    return (
        <div className="mx-auto signupform shadow bg-white rounded form-width text-capitalize my-5">
            <div className="text-center p-5 pb-0">
            <img src={logo} alt='...' height='100px' width='100px' />
                <h1>Verify Email</h1>
                <p className="text-muted text-center">Resend Email, If Not Received.</p>
            </div>
            <div className="p-5">
                <form>
                    <div className="row">
                        <div className="pt-2">
                            <button className="btn btn-outline-secondary btn-lg w-100">Resend Email</button>
                        </div>

                        <div className="pt-2">
                            <button className="btn btn-secondary btn-lg w-100">Continue</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}