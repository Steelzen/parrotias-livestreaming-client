import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import VideoPlayer from "./components/videoplayer";
import { axios } from "axios";

function handleSubmit(event) {
  event.preventDefault();
  console.log("Submitted");
}

function App() {
  return (
    <div className="App">
      <h1>Parrotias Livestreaming</h1>
      <VideoPlayer playbackId="" />
      <form
        action="http://localhost:8000/create-live-stream"
        method="POST"
        onSubmit={handleSubmit}
      >
        <button type="submit">Create Live Stream</button>
      </form>
    </div>
  );
}

export default App;
