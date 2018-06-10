// libraries
import React from 'react'; // go into node modules and get directory dom.
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// component files
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB5T4PkhFt0jpVFpU11H7mYFfftHjMsKRg'; // youtube api key

YTSearch( {key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

const App = () => (<div>
    <SearchBar />
  </div>);

// Take this component generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
