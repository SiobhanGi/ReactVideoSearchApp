import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={event => this.setState({ input: event.target.value })}
        />
      </div>);
  }
}

export default SearchBar;
