import React from 'react';

const ForgetPassword = () => {
    return (
        <div className="mx-auto loginform shadow bg-white rounded form-width text-capitalize my-5">
            <div className="text-center p-5 pb-0">
                <h1>Forget Password ?</h1>
                <p className="text-muted">Enter The Email ID Linked To Your Account.</p>
            </div>
            <div className="p-5">
                <form>
                    <div className="row">
                        <div className="py-2">
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                placeholder='password'
                            />
                        </div>
                        <div className="pt-4">
                            <button className="btn btn-secondary btn-lg w-100">Procced</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;