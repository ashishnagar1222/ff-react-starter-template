import React from 'react';
import './style.css'
import logo from "../../../assets/logo.png";

export default function OtpScreen(props) {
    return (
        <div className="mx-auto signupform shadow bg-white rounded form-width text-capitalize my-5">
            <div className="text-center p-5 pb-0">
                <img src={logo} alt='...' height='100px' width='100px' />
                <h1>Verify OTP</h1>
            </div>
            <div className="p-5">
                <form>
                    <div className="row">
                        <div className="py-2">
                            <p className="text-muted text-center">Enter The OTP You Received On :  XXXXXXXXXX</p>
                            <input
                                className="form-control form-control-lg"
                                type="number"
                                name='fname'
                                placeholder='Enter OTP'
                            />
                        </div>
                        <div className='pb-3'>
                            <p className='text-muted pt-1'><a className="text-decoration-none" href="#">Resend</a></p>
                        </div>

                        <div className="pt-2">
                            <button className="btn btn-secondary btn-lg w-100">Validate</button>
                        </div>

                        <div className='pb-3'>
                            <p className='text-center text-muted pt-2'>Don't Have An Account?<a className="text-decoration-none" href="#">Sign Up</a></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}