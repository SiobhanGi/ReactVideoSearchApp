// libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// component files
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

// youtube api key
const API_KEY = 'AIzaSyB5T4PkhFt0jpVFpU11H7mYFfftHjMsKRg';

// app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch( {key: API_KEY, term: 'scottish terriers' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (<div>
      <SearchBar />
      <VideoList videos={ this.state.videos }/>
      </div>
    );
  };
}

/* VideoList needs the list of videos, so we pass data from parent (app)
 to child (videolist) by defining a property on the JSX tag.

 render() {
   return (<div>
     <SearchBar />
     <VideoList videos={ this.state.videos }/>
     </div>

This passing of data is passing 'props' or properties to videoList so
we need to add argument of props to the videoList function.

const VideoList = (props) => {}

So anytime app renders videolist also gets the refresh.*/

ReactDOM.render(<App />, document.querySelector('.container'));
