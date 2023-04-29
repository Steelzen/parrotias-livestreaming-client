import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import VideoPlayer from "./components/videoplayer";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [playbackId, setPlaybackId] = useState("");
  const [streamKey, setStreamKey] = useState("");

  // Handle Create Live Stream button to create a live stream
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submitted");

    await axios
      .post("http://localhost:8000/create-live-stream")
      .then((response) => {
        setData(response.data);
      });
  };

  // Handle Set Live Stream button to set a playback Id and stream key.
  // Playback ID is used to play the live stream in VideoPlayer component.
  const handleSet = async (event) => {
    event.preventDefault();

    console.log("Set");

    setPlaybackId(data["data"]["playback_id"]);
    setStreamKey(data["data"]["stream_key"]);
  };

  console.log("playbackId: ", playbackId);

  return (
    <div className="App">
      <h1>Parrotias Livestreaming</h1>
      <VideoPlayer playbackId={playbackId} videoId="" />
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <button type="submit">Create Live Stream</button>
      </form>
      <div>{JSON.stringify(data)}</div>
      <form onSubmit={handleSet}>
        <button type="submit">Set Live Stream</button>
      </form>
    </div>
  );
}

export default App;
