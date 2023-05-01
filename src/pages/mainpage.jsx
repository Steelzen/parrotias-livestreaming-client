import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <main>
      <h1>Parrotias Streaming</h1>
      <button type="button" href="/livestream">
        <Link to="/livestream">Live Streaming</Link>
      </button>
      <button type="button" href="/myvideo">
        <Link to="/myvideo">Stream My Video</Link>
      </button>
    </main>
  );
};

export default MainPage;
