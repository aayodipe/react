import React from 'react';
import ReactDOM from 'react-dom';

// let element = React.createElement("h1",null,"Welcome to your life");

// let element = React.createElement("ul",null,[
//     React.createElement("li", { key : 1 }, "List Item 1"),
//     React.createElement("li", { key : 2 }, "List Item 2"),
//     React.createElement("li", { key : 3 }, "List Item 3"),
//     React.createElement("li", { key : 4 }, "List Item 4"),
//     React.createElement("li", { key : 5 }, "List Item 5"),
// ]);

// let heroes = ['Ironman', 'Captain America', 'Spiderman', 'Batman', 'Superman', 'Joker']

// let element = React.createElement('ol', null, heroes.map( (val, idx, arr) => React.createElement('li',{ key : idx }, val)))

/*
use 'className' instead of 'class' attribute
always close the tags
use 'htmlFor' instead of 'for' attribute of label tag
use configuration object for inline style
    the property names for style will be camel cased.
events must be camel cased
always return a single tag, React.Fragment or <>
*/
function clickMe(){
    alert("you clicked the button");
}
let element = <>
                <h1>My First Application</h1>
                <ul>
                    <li className="box">Ironman</li>
                    <li>Captain America</li>
                    <li className="box">Spiderman</li>
                    <li style={ { color : 'blue', backgroundColor : 'pink' } }>Batman</li>
                </ul>
                <label htmlFor="uname"> User Name : <input id="uname" /> </label>
                <button onClick={ clickMe }>Click Me</button>
            </>


ReactDOM.render(element, document.getElementById("root"));