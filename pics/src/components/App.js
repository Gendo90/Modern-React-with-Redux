import axios from "axios";
import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchBarSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos',
        {
            params: { query: term },
            headers: {
                Authorization: "Client-ID WG7F5urzdwVmHq4SLJUKqoJY7cBH6hHE7vqT3Ol9Nvc"
            }
        })

        console.log(response.data.results)
    }

    render() {
        return (
            <div className="ui container" style={{margin: "10px"}}>
                <SearchBar onSubmit={this.onSearchBarSubmit} />
            </div>
        );
    }
}

export default App;
