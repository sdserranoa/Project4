import React, { Component } from 'react';
import Navigation from './Navigation.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Diets from './Diets.js';
import Contact from './Contact.js';
import Restaurants from './Restaurants.js';
import UserWrap from './UserManager/UserWrap.js';
import Orders from './Order/OrderList.js';
import Meals from './Meals/Meal';


class Index extends Component {

    render() {
        return (
            <Router>
                <Navigation />
                <Route path="/" exact component={Home} />
                <Route path="/restaurant" component={Restaurants} />
                <Route path="/diets" component={Diets} />
                <Route path="/contact" component={Contact} />
                <Route path="/orders" component={Orders} />
                <Route path="/meals" component={Meals} />

                <Route path="/SignUp" component={UserWrap} />
            </Router>
        );
    };
}

export default Index;