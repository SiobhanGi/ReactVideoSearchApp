import React, { Component } from 'react';

// class component
class SearchBar extends Component {

  // this is how we initialse state in a class component.
  constructor(props) {
    super(props);
    this.state = { input: ''};
  }

  render() {
    return (
    <div>
    <input
      value = { this.state.input }
      onChange={ event => this.setState( { input: event.target.value }) }/>
    </div>)
  }
}

export default SearchBar;

/*

Controlled Field (Form/Input)- value is set by the state

inside the input we've specificed that input has a value that equals to { this.state.term }
so its value only changes when it state changes.

The flow = this.setState sets the term to be the event.target.value. which then assigned to value what the event has recorded.
this is how react handles data.
*/
