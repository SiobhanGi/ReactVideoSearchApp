// libraries
import React, { Component } from 'react'; // go into node modules and get directory dom.
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// component files
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB5T4PkhFt0jpVFpU11H7mYFfftHjMsKRg'; // youtube api key

// app
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch( {key: API_KEY, term: 'scottish terriers'}, (data) => {
      this.setState({ videos });
      /* sets the state to the video data, the data name is a placeholder,
      // if key and value are same in setState, we can condense to just
       the name of the variable thanks to es6 */
    });
  }

  render() {
    return (<div>
      <SearchBar />
      </div>
    );
  };
}

// Take this component generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
