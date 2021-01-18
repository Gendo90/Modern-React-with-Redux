import React from "react";

class SearchBar extends React.Component {
    //use MVC ideas to convert component from uncontrolled to
    //controlled by storing input text in state (model) and then
    //setting the value of the input element of the component (view)
    state = { term: '' }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                        type="text"
                        value={this.state.term}
                        onChange={ (e) => this.setState({ term: e.target.value })}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
