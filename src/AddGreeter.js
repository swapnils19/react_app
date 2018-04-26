import React, { Component } from "react";
import './AddProps.css'
import 'bootstrap/less/bootstrap.less'
import { Button } from 'react-bootstrap';

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
                <Button bsStyle="primary" onClick={this.addGreeting}>Add</Button>
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