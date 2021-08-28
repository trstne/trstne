import React, { useState } from 'react';
import ReactDOM from 'react-dom';


export const Home = () => {

    const [state, setState] = useState('app default');

    function sample(variable) {
        return null;
    };

    return (
        <div id="app-container">
            <div id="content-container">
            <div id="border-top"></div>
            <div class={state}>
            {state == 'app default' ?
            <div id="text">
                
                <div id="hi">Hello.</div>
                
                <div id="name">My name is Tristen Lawrence.</div>
                
                <div id="description">I am a senior in Computer Science &amp; Engineering 
                at the <a href="https://uconn.edu" class="link style">University of Connecticut</a>.</div>

                <div id="description">I currently work as a <a href="https://webdev.uconn.edu" class="link style">Web Developer</a> for UConn Information Technology Services.</div>
                
                {/* <div id="spotify"><a class="link spotify" onClick={event => setState("app green")}><i class="fab fa-spotify"></i></a></div> */}
            </div>
            : 
            <iframe src="https://open.spotify.com/embed/playlist/2zDeGfL24hMUsGZljrLbyQ" width="1000" height="800" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            
            }
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

