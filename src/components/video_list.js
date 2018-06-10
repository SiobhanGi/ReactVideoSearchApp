import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={ video } />
  });

/* we got a warning that eac child in an array or iterator should have a
 unique "key" prop. So we went into network, look at the search request and
 saw that there was a unique key called etag. We now added key={video.etag}
 to the map function to produce a unique key for each video.
*/

  return(
    <ul className="col-md-4 list-group">
    { videoItems }
    </ul>
  );
}

export default VideoList;
/* using className to define class instead of class due to the potentional of
naming conflicts that could occur.

/* Stay away from for loops as much as possible, try stick to .map
e.g arr = [1, 2, 3, 4, 5]

arr.map(function(number) { return '<div>' + number + "</div>"}); */
