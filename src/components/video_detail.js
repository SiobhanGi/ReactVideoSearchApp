import React from 'react';

const VideoDetail = ({ video }) => {
  // catch for non loading videos
  if (!video) {
    return <div>Loading...</div>;
  }

  // ID's change, this keeps videos from breaking in future
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">

      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>

      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>

    </div>
  );
};

export default VideoDetail;
