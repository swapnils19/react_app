import React, { Component } from "react";
import './AddProps.css'

class AddGreeter extends Component {
    render() {
        return (
            <div className="AddProps">
                <input
                    type="text"
                    onChange={this.handleUpdate}
                    value={this.state.greetingName}
                />
                &nbsp;&nbsp;
                <button onClick={this.addGreeting}>Add</button>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = { greetingName: '' };
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addGreeting = this.addGreeting.bind(this);
    }

    handleUpdate(event) {
        this.setState({ greetingName: event.target.value });
    }

    addGreeting() {
        this.props.addGreeting(this.state.greetingName);
        this.setState({ greetingName: '' });
    }
}
export default AddGreeter;