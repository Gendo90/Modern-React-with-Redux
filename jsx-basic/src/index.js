// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () =>{
    const labelText = "Enter name: "
    const buttonText = {text: "Click Me!"}

    return (
        <div>
          <label className="label" htmlFor="name">{ labelText }</label>
          <input id="name" type="text"/>
          <button style={{backgroundColor: 'blue', color: 'white'}}>{ buttonText.text }</button>
        </div>
    )
}

// Get the component to display on the screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);
