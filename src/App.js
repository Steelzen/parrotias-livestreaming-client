import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  redirect,
  Route,
  Routes,
} from "react-router-dom";
import LiveStream from "./pages/livestream_mux";
import PlayMyVideo from "./pages/playMyVideo";
import MainPage from "./pages/mainpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/livestream" element={<LiveStream />} />
        <Route path="/myvideo" element={<PlayMyVideo />} />
      </Routes>
    </div>
  );
}

export default App;
