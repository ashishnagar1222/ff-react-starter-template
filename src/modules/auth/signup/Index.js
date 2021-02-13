import React from 'react';
import './style.css'

export default function SignUp(props) {
    return (
        <div className="mx-auto signupform shadow bg-white rounded form-width text-capitalize my-5">
            <div className="text-center p-5 pb-0">
                <h1>Create an Account</h1>
                <p className="text-muted">Fields marked with astrisks (<span className="text-danger">*</span>) are mandatory.</p>
            </div>
            <div className="p-5">
                <form>
                    <div className="row">
                        <div className="col-6 py-2">
                            <label for="formFile" className="form-label mb-1">First Name<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg form-input-new removeEffect placy"
                                type="text"
                                name='fname'
                                // value={fname.value}
                                placeholder='First name'
                            />
                        </div>
                        <div className="col-6 py-2">
                            <label for="formFile" className="form-label mb-1">Surname<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg form-input-new removeEffect placy"
                                type="text"
                                name='fname'
                                // value={fname.value}
                                placeholder='surname'
                            />
                        </div>
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Email<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg form-input-new removeEffect placy"
                                type="email"
                                name='fname'
                                // value={fname.value}
                                placeholder='Email'
                            />
                        </div>
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Phone Number<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg form-input-new removeEffect placy"
                                type="phone"
                                name='fname'
                                // value={fname.value}
                                placeholder='Phone Number'
                            />
                        </div>
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Password<sup className='text-danger'>*</sup></label>
                            <input
                                className="form-control form-control-lg form-input-new removeEffect placy"
                                type="password"
                                name='fname'
                                // value={fname.value}
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

                    </div>
                </form>
            </div>
        </div>
    )
}