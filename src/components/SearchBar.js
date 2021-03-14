import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <h2 class="ui centered purple aligned header">Welcome to PicFinder!</h2>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui large fluid icon input">
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Let me find you some pics..."
            />
            <i class="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
