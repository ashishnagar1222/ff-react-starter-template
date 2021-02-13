import React from 'react';

const ResetPassword = () => {
    return (
        <div className="mx-auto loginform shadow bg-white rounded form-width text-capitalize my-5">
            <div className="text-center p-5 pb-0">
                <h1>Reset Password </h1>
            </div>
            <div className="p-5">
                <form>
                    <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Password</label>
                            <input
                                className="form-control form-control-lg form-input-new"
                                type="password"
                                placeholder='Password'
                            />
                        </div>
                        <div className="py-2">
                            <label for="formFile" className="form-label mb-1">Confirm Password</label>
                            <input
                                className="form-control form-control-lg form-input-new"
                                type="password"
                                placeholder='confirm Password'
                            />
                        </div>
                        <div className="pt-4">
                            <button className="btn btn-secondary btn-lg w-100">Submit</button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;