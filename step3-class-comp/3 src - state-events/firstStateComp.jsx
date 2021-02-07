import { Component } from "react";

export class FirstStateComp extends Component{
    constructor(){
        super();
        this.state = {
            title : 'Heroes Application',
            power : 0
        }
        // this.increasePower = this.increasePower.bind(this);
    }
    increasePower = () => {
        // alert("you clicked the button");
        this.setState({
            power : this.state.power+1
        })
    }
    increasePowerTo5(evt){
        this.setState({
            power : evt.target.value
        })
    }
    render(){
        return <div>
            <h2>First State Comp</h2>
            <h3>Power is : { this.state.power }</h3>
            <button onClick={ this.increasePower }>Increase Power</button>
            <br/>
            <input type="range" onChange={ (event) => { this.increasePowerTo5(event) }  } />
            <br/>
            <button onClick={ () => { this.increasePowerTo5(5) } }>Increase Power to 5 </button>
            </div>
    }
}

export default FirstStateComp;