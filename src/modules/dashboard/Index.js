import React from 'react';
import logo from "../../assets/logo.png";
import './style.css';

const Dashboard = () => {
    return (
        

        <div className="mx-auto dashboardmain shadow bg-white rounded form-width text-capitalize my-5 py-5">
            <div className="text-center p-5 pb-0">
                <h1> Welcome to Dashboard</h1>
                <img className="mt-5" src={logo} alt='...' height='100px' width='100px' />
            </div>
        </div>
    );
};

export default Dashboard;