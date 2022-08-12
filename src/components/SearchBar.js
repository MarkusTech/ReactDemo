import React from "react";


class SearchBar extends React.Component {
    // initialize state and the old way
    // constructor(props){
    //     super(props);
    //     this.state = {term: ""};
    //     //  fix the missing state and fix the this.this error
    //     this.onInputChange = this.onInputChange.bind(this);
    // }

    // other way to initialize state and this is the new way using arrow function
    state = { term: "" };

    onInputChange = (event) => { // event object
        this.setState({ term: event.target.value }); // setState function
    }

    // componentDidUpdate() {
    //     console.log(this.state.term);
    // }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="container my-3">
                {/* onSubmit here is a event handler only */}
                <form onSubmit={this.onFormSubmit}> 
                    <label>{this.props.label}</label>
                    <label></label>
                    <input
                        type="Text"
                        value={this.state.term}
                        className="w-100"
                        // this.this error
                        onChange={this.onInputChange} // Event Handler
                    />
                </form>
            </div>
        );
    }
}
export default SearchBar;