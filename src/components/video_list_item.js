import React from 'react';

const VideoListItem = ({video}) => {

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>

        <div className="media-body">
          <div className="media-heading"></div>
        </div>
      </div>
    </li>);
};

export default VideoListItem;


/* ({video}) is es6 way of saying const video = props.video;
it just cleans up code. */
