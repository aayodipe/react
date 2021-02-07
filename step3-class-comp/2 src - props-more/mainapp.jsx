import { Component } from "react";
import Hero from "./herolist";

class MainApp extends Component{
    justiceLeague = ['Batman', 'Superman', 'Wonder Woman', 'Aqua Man', 'Cyborg', 'Flash'];
    avengers = ['Ironman', 'Captain America', 'Black Widow', 'Hulk', 'Spiderman'];
    indicHeroes = ['Shaktiman', 'Shakti', 'Nagraj', 'Chacha Choudary', 'Phantom'];
    render(){
        return <>
                <h1>Main Application</h1>
                <hr/>
                <Hero ver={ 101 } title="Justice League" hlist={ this.justiceLeague }/>
                <Hero ver={ 102 } title="Avengers" hlist={ this.avengers }/>
                <Hero ver={ 103 } title={"5"} hlist={ this.indicHeroes }/>
               </>
    }
}

export default MainApp;