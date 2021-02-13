import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from '../components/header/Index';
import Footer from "../components/footer/Index";
import Dashboard from '../modules/dashboard/Index';
import Profile from '../modules/profile/Index';
const Index = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route component={Dashboard} path='/dashboard' exact />
                <Route component={Profile} path='/profile' exact />
            </Switch>
            <Footer />
        </Router>
    );
};

export default Index;