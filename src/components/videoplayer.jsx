import React from "react";
import ReactDOM from "react-dom/client";
import MuxPlayer from "@mux/mux-player-react";

export default function VideoPlayer(props) {
  const { playbackId, videoId, videoTitle, viewerUserId } = props;

  return (
    <MuxPlayer
      streamType="live"
      playbackId={playbackId}
      metadata={{
        video_id: videoId,
        video_title: "Test video title",
        viewer_user_id: "user-id-007",
      }}
    />
  );
}
