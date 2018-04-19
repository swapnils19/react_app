import React, { Component } from "react";
import './AddProps.css'

class AddLanguage extends Component {
    render() {
        return (
            <div className="AddProps">
                <input
                    type = "text"
                    onChange = {this.handleUpdate}
                    value = {this.state.newLanguage}
                />
                <button onClick = {this.addLanguage}> Add Language </button>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.addLanguage = this.addLanguage.bind(this);
        this.state = { newLanguage: '' };
    }

    handleUpdate(event) {
        this.setState({ newLanguage: event.target.value });
    }

    addLanguage() {
        this.props.addLanguage(this.state.newLanguage);
        this.setState({ newLanguage: '' });
    }
}
export default AddLanguage;
