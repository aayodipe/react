import { Component } from "react";

export class FirstComp extends Component{
    constructor(){
        super();
        this.state = {
            power : 0
        }
    }
    render(){
        return <h1>
            Hello From First Component  
            Message from parent : { this.props.children }
            Title : { this.props.title }
            <br/>
            Power is : { this.state.power }
            </h1>;
    }
}