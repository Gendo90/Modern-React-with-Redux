import React from "react";
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash"

class App extends React.Component {
    state = { images: [] }

    //needed to use an arrow function to get correct scope - otherwise scope is
    //props object for the SearchBar component where this function is called
    onSearchBarSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term },
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
