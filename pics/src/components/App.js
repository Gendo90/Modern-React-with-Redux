import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { images: [] }

    //needed to use an arrow function to get correct scope - otherwise scope is
    //props object for the SearchBar component where this function is called
    onSearchBarSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            params: { query: term },
            headers: {
                Authorization: "Client-ID WG7F5urzdwVmHq4SLJUKqoJY7cBH6hHE7vqT3Ol9Nvc"
            }
        })

        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="ui container" style={{margin: "10px"}}>
                <SearchBar onSubmit={this.onSearchBarSubmit} />
                Page Results: {this.state.images.length}
            </div>
        );
    }
}

export default App;
