import React from "react";
import ReactDOM from "react-dom/client";
import MuxPlayer from "@mux/mux-player-react";

export default function VideoPlayer(props) {
  const playbackId = props.playbackId;
  const videoTitle = props.videoTitle;
  const viewerUserId = props.viewerUserId;

  return (
    <MuxPlayer
      streamType="live"
      playbackId={playbackId}
      metadata={{
        video_id: "video-id-54321",
        video_title: "Test video title",
        viewer_user_id: "user-id-007",
      }}
    />
  );
}
