import { Component } from "react";
import PropTypes from "prop-types";

class Hero extends Component{

    // static defaultProps = {
    //     title : "Heroes Application"
    // }

    // static propTypes = {
    //     title : PropTypes.string.isRequired
    // }

    render(){
        return <>
            <h1>{ this.props.title } Version { this.props.ver }</h1>
            <ol>{
                this.props.hlist.map((val, idx, arr) =>  <li key={ idx }> { val }</li>)
                }</ol>
        </>
    }
}
Hero.defaultProps = {
    title : "Default Hereos Application"
}
Hero.propTypes = {
    title : PropTypes.string.isRequired,
    val : PropTypes.number
}
export default Hero;