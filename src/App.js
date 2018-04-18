import React from 'react';
import HelloWorld from './HelloWorld';

const App = () => {
    return (
        <div className="App">
            <HelloWorld name='swaps' />
            <HelloWorld name='swapii' />
        </div>
    );
};

export default App;