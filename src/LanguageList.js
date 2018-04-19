import React, { Component } from 'react';

class LanguageList extends Component {
    render() {
        return (
            <div className="LanguageList">
                { this.renderLanguages() }
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = { languages: ['English', 'French'] };
    }

    renderLanguages() {
        return this.state.languages.map(
            (name, index) => (
                <button key={index}> { name } </button>
            )
        )
    }
}
export default LanguageList;
