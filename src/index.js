import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyB5T4PkhFt0jpVFpU11H7mYFfftHjMsKRg';

const App = () => (<div>hi</div>);

// Take this component generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));

/*  <App /> = valid jsx

    ReactDOM.render() Requires two arguemnts, the jsx app tag, and a dom selector.

    Which is a reference to a node element on the html page.

    This code is simply saying, reactDOM I want you to render 'app' in the
    document at the node element that matches 'container'.

    */
