import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/header/Index';
import Footer from "../components/footer/Index";
import Dashboard from '../modules/dashboard/Index';
import Profile from '../modules/profile/Index';
import Login from '../modules/auth/login/Index';
import ForgetPassword from '../modules/auth/forgetPassword/Index';
import ResetPassword from '../modules/auth/resetPassword/Index';
const Index = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route component={Login} path='/' exact />
                <Route component={Dashboard} path='/dashboard' exact />
                <Route component={Profile} path='/profile' exact />
                <Route component={ForgetPassword} path='/forget-password' exact />
                <Route component={ResetPassword} path='/reset-password' exact />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Index;