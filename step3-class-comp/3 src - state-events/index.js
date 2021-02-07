import { Component } from 'react';
import ReactDOM from 'react-dom';
import FirstStateComp from './firstStateComp';

class MainApp extends Component{
    render(){
        return <div>
                    <h1> States 101 </h1>
                    <hr/>
                    <FirstStateComp></FirstStateComp>
               </div>
    }
}

ReactDOM.render(<MainApp/>, 
document.getElementById("root"));