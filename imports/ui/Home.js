import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class Home extends Component {
    render() {
        return (
            <div>
                Home
                {/*console.log(Meteor.users.find({}))*/}
                <ul>
                {Meteor.users.find({}).map(u => <li key={u._id}>{u.username}</li>)}
                    
                </ul>
            </div>
        )
    }
}

export default Home;
