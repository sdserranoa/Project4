import React, { Component } from 'react';
import Navigation from './Navigation.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import Diets from './Diets.js';
import Contact from './Contact.js';
import Restaurants from './Restaurants.js';
import UserWrap from './UserManager/UserWrap.js';
import Orders from './Order/OrderList.js';
import Meals from './Meals/MealList';
import MealDetail from './Meals/MealDetail';
import { Meteor } from 'meteor/meteor';
import ChatApp from './chat/ChatApp';
import MealFilter from './Meals/MealFilter.js';
//import ToastU from './UserManager/Toast.js'



class Index extends Component {
    constructor() {
        super();
        this.state = { isAuthenticated: Meteor.userId() !== null };
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.singup = this.singup.bind(this);
    }

    getMeteorData = () => {
        this.setState({ isAuthenticated: Meteor.userId() !== null });
    }

    login(username, password) {

        Meteor.loginWithPassword(username, password, (err) => {
            if (err) {
                console.log(err.reason);
                //<ToastU title={"There was an error"} description={err.reason} />
            } else {
                console.log("You're in!");
                //<ToastU title={"You're In!"} description={"Great job!"} />
            }
            this.getMeteorData();
        });

    }

    logout() {
        Meteor.logout((err) => {
            if (err) {
                console.log(err.reason);
            } else {
                console.log("You're out!");
            }
            this.getMeteorData();
        });

    }
    singup(email, username, password) {
        Accounts.createUser({ email, username, password }, (err) => {
            if (err) {
                console.log(err.reason);
                //<ToastU title={"There was an error"} description={err.reason} />
            } else {
                console.log("You're In");
                //<ToastU title={"You register succesfully!"} description={"Congrats! This is the first step into a healthy lifestyle!"} />
            }
            this.getMeteorData();
        });

    }


    render() {
        return (
                <Router>
                    <Navigation logout={this.logout} />
                    <Route path="/" exact component={Home} />
                    <Route path="/restaurant" component={Restaurants} />
                    <Route path="/diets" component={Diets} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/orders" component={Orders} />
                    <Route exact path="/meals" component={MealFilter} />
                    <Route path="/meals/:id" component={MealDetail} />
                    <Route path="/chat" component={ChatApp} />

                    <Route path="/SignUp" render={props => <UserWrap singup={this.singup} login={this.login} />} />
                </Router>
        );
    };
}

export default Index;