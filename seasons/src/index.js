import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay"
import Loader from "./Loader"

class App extends React.Component {
    // state refactor here possible due to Babel library
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message })
        )
    }

    //example of a method containing conditional return statements
    //must be separated from render to enable easier use and addition of
    //wrapper elements (like a border around any response)
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) return <div>Error: { this.state.errorMessage }</div>

        if(!this.state.errorMessage && this.state.lat) return <SeasonDisplay lat={ this.state.lat } />

        return <Loader message="Please accept the location request" />
    }

    //example of render containing a helper method wrapped in an element, for
    //all possible cases of conditional helper method output
    render() {
        return <div className="border red">{this.renderContent()}</div>
    }
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
