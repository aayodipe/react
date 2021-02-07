//import React, { Component as Comp } from 'react';
import Vijay from 'react';
import ReactDOM from 'react-dom';

// class App extends Comp{
//     render(){
//         return <h1> Welcome to your life !!! </h1>;
//     }
// }

// class App extends React.Component{
//     render(){
//         return <h1> Welcome to your life !!! </h1>;
//     }
// }

class App extends Vijay.Component{
    render(){
        return <h1> Welcome to your life !!! </h1>;
    }
}

ReactDOM.render(<App/>, document.getElementById("root"));