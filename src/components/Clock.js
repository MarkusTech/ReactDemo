import React from "react";

class Clock extends React.Component {
    // props
    constructor(props) {
        // super is recuired when you have a constructor
        super(props);
        // initializing the value of date state
        this.state = { date: new Date() };
    }

    // componentDidMount( ) method
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // componentWillUnmount() method
    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("component will unmount");
    }

    // componentDidUpdate() method
    componentDidUpdate(){
        console.log("Component Updated");
    }

    tick() {
        //set state to update state object
        this.setState(
            {
                date: new Date()
            }
        );
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
     
}
export default Clock;