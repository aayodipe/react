import { Component } from "react";
import { FirstComp } from "./firstcomp";

class App extends Component{
    render(){
        return<div>
                <h1> Welcome to your life </h1>
                <FirstComp title="Heroes App Title"> Hello from App Component </FirstComp>
            </div> 
    }
}

export default App;