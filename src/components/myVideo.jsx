import React, { useState } from "react";
import ReactPlayer from "react-player";

const MyVideo = () => {
  const [videoFile, setVideoFile] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const videoUrl = videoFile ? URL.createObjectURL(videoFile) : null;

  return (
    <div>
      <input type="file" onChange={handleFileSelect} accept="video/*" />
      {videoUrl && (
        <ReactPlayer
          url={videoUrl}
          controls={true}
          width="100%"
          height="auto"
        />
      )}
    </div>
  );
};

export default MyVideo;
