import React from "react";

class Welcome extends React.Component{
    render(){
        // return <h1>Hello, Wenn Mark Recopelacion!</h1>
        return <h1>Hello, {this.props.name}</h1> // props
    }
}

export default Welcome;
