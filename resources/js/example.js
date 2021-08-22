import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export const Example = () => {

    const [state, setState] = useState("");

    function sample(variable) {
        return null;
    };

    const funcAS = async () => {
        return null;
    };

    return (
        <div id="text">hello</div>

    )

}
console.log(document);

if (document.getElementById('example')) {
    ReactDOM.render(<Example />,
      document.getElementById('example'));
  }