import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import VideoPlayer from "./components/videoplayer";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Submitted");

    axios.post("http://localhost:8000/create-live-stream").then((response) => {
      setData(response.data);
    });
  };

  return (
    <div className="App">
      <h1>Parrotias Livestreaming</h1>
      <VideoPlayer playbackId="" />
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <button type="submit">Create Live Stream</button>
      </form>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
