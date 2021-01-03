// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () =>{
    return <div>"Hi there!"</div>
}

// Get the component to display on the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
