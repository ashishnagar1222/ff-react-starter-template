import React from 'react';
import './style.css'
import logo from "../../../assets/logo.png";

export default function SignUp(props) {
    return (
        <div className="mx-auto signupform shadow bg-white rounded form-width text-capitalize my-5">
            <div className="text-center p-5 pb-0">
            <img src={logo} alt='...' height='100px' width='100px' />
                <h1>Create an Account</h1>
            </div>
            <div className="p-5">
                <form>
                    <div className="row">
                        <div className="col-6 py-2">
                            <label for="formFile" className="form-label mb-1">First Name<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                name='fname'
                                placeholder='First name'
                            />
                        </div>
                        <div className="col-6 py-2">
                            <label for="formFile" className="form-label mb-1">Surname<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                name='fname'
                                placeholder='surname'
                            />
                        </div>
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Email<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg"
                                type="email"
                                name='fname'
                                placeholder='Email'
                            />
                        </div>
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Phone Number<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg"
                                type="phone"
                                name='fname'
                                placeholder='Phone Number'
                            />
                        </div>
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Password<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                name='fname'
                                placeholder='password'
                            />
                        </div>

                        <div className="py-1">
                            <input
                                className="form-check-input p-2 me-2"
                                type="checkbox"
                                name='terms_and_condition'
                            />
                            <label className="form-check-label text-muted" for="gridCheck">
                                I Accept the Terms & Conditions
                        </label>
                        </div>

                        <div className="pt-4">
                            <button className="btn btn-secondary btn-lg w-100">Sign Up</button>
                        </div>


                        <div className='pb-3'>
                            <p className='text-center text-muted pt-2'>Already have an account? <a className="text-decoration-none" href="#">Sign In</a></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}