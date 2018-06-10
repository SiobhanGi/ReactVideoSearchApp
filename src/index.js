// libraries
import React from 'react'; // go into node modules and get directory dom.
import ReactDOM from 'react-dom';

// component files
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB5T4PkhFt0jpVFpU11H7mYFfftHjMsKRg'; // youtube api key

const App = () => (<div>
    <SearchBar />
  </div>);

// Take this component generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
