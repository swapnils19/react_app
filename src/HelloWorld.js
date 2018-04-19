import React, { Component } from 'react';
import './HelloWorld.css';
import LanguageList from './LanguageList';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = { greeting: 'Hello' };
        this.frenchify = this.frenchify.bind(this);
        this.removeGreeting = this.removeGreeting.bind(this);
    }

    render() {
        return (
            <div className="HelloWorld">
                {this.state.greeting} {this.props.name}!
                <br />
                {/* <button onClick={this.frenchify}>Frenchify!</button> */}
                <LanguageList />
                <br />
                <button onClick={this.removeGreeting}>Remove</button>
            </div>
        );
    }

    frenchify() {
        this.setState({ greeting: 'Bonjour' });
    }

    removeGreeting() {
        this.props.removeGreeting(this.props.name);
    }
}
export default HelloWorld;