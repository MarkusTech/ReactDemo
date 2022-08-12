import React from "react";
import axios from "axios"
import Welcome from "./Welcome";
import NabBar from "./NavBar";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import ArrayList from "./ArrayList";
import Clock from "./Clock";

// class component
class App extends React.Component {

    state = { images: [] };


    // props that can be call on his child
    onSearchSubmit = async (term) => {

        // new way to get and have an output on request on API
        // async and await method
        const response = await axios.get('https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID ULjATSL-6WNJEwlxosKzy59ZjUjsyHDJCkRxQA7A_7k'
                },
                params: {
                    query: term
                }
            }
        );

        this.setState( { images: response.data.results });


        // // =========== promise Syntax and this is the old way to get the output ===========
        // axios.get('https://api.unsplash.com/search/photos',
        //     {
        //         headers: {
        //             Authorization: 'Client-ID ULjATSL-6WNJEwlxosKzy59ZjUjsyHDJCkRxQA7A_7k'
        //         },
        //         params: {
        //             query: term
        //         }
        //     }
        // )
        //     .then((response) => {
        //         // this is the old way to get thre request using .then
        //         console.log(response.data.results);
        //     }
        //     );
    }

    render() {
        return (
            <div>
                <NabBar />
                {/* components on submit it is the props method */}
                <SearchBar onSubmit={this.onSearchSubmit} label="Image Search" />
                <ImageList images = {this.state.images}/>
                <div className="container">
                    <h1>Hello World</h1>
                    {/* On welcome. */}
                    <Welcome name="Markus Cabaron" />
                </div>
                <ArrayList />
                <Clock />
            </div>
        );
    }

}
// exporting the app component to render in index
export default App;
