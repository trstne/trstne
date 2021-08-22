import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export const Home = () => {

    const [state, setState] = useState("");

    function sample(variable) {
        return null;
    };

    const funcAS = async () => {
        return null;
    };

    return (
        <div id="app-container">
            <div id="app">
            <div id="text">hello</div>
            </div>
        </div>
    )

}
console.log(document);

if (document.getElementById('home')) {
    ReactDOM.render(<Home />,
      document.getElementById('home'));
  }

