import React from 'react';
import './style.css'

const Login = () => {
    return (
        <div className="mx-auto loginform shadow bg-white rounded form-width text-capitalize my-5">
            <div className="text-center p-5 pb-0">
                <h1>Sign into your Account</h1>
            </div>
            <div className="p-5">
                <form>
                    <div className="row">
                       
                        
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Email</label>
                            <input
                                className="form-control form-control-lg"
                                type="email"
                                placeholder='Email'
                            />
                        </div>
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Password</label>
                            <input
                                className="form-control form-control-lg"
                                type="password"
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
                                Remember me
                        </label>
                        </div>

                        <div className="pt-4">
                            <button className="btn btn-secondary btn-lg w-100">Sign Up</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;