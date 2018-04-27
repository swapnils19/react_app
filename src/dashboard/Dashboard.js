import React, { Component } from "react";
import UserLogin from './user_auth/UserLogin';

class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <UserLogin />
            </div>
        )
    }
}

export default Dashboard;
