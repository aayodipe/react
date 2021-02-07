import { Component } from 'react';
import ReactDOM from 'react-dom';

class MainApp extends Component{
    constructor(){
        super();
        this.state = {
            power : 1
        }
    }
    render(){
/*
        if(this.state.power > 5){
            return <h1> Hero is strong </h1>
        }else{
            return <h1> Hero needs rest </h1>
        }
*/
//       return <h1> Hero { this.state.power < 5  ? 'needs rest' : 'is strong' } </h1>
         return <div>
             <h1> Hero's  power is { this.state.power < 5 && ' less than 5 '} </h1> 
             <h1> Hero's  power is { this.state.power < 4 && ' less than 4 '} </h1> 
             <h1> Hero's  power is { this.state.power < 3 && ' less than 3 '} </h1> 
             <h1> Hero's  power is { this.state.power < 2 && ' less than 2 '} </h1> 
         </div>  
    }
}

ReactDOM.render(<MainApp/>, 
document.getElementById("root"));