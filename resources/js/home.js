import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export const Home = () => {

    const [state, setState] = useState("");

    function sample(variable) {
        return null;
    };

    const funcAS = async () => {
        document.getElementById("description").style.color = "red";
    };

    return (
        <div id="app-container">
            <div id="app">
            <div id="border-top"></div>
            <div id="text">
                <div id="hi">Hello.</div>
                
                <div id="name">My name is Tristen Lawrence.</div>
                
                <div id="description">I am a senior in Computer Science &amp; Engineering <br></br>
                at the <a href="https://uconn.edu" class="link style">University of Connecticut</a>.</div>

                <div id="description">I currently work as a <a href="https://webdev.uconn.edu" class="link style">Web Developer</a> for <a href="https://webdev.uconn.edu" class="link style">UConn Information Technology Services.</a></div>
                
                
                
            </div>
            </div>
        </div>
    )

}
console.log(document);

if (document.getElementById('home')) {
    ReactDOM.render(<Home />,
      document.getElementById('home'));
  }

