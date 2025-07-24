import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { assets } from "../../assets";
import "./Player.css"; // 🔁 Import CSS here

const Player = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [videoId, setVideoId] = useState(null);

  async function fetchYouTubeTrailer(title) {
    const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const query = encodeURIComponent(title + " official trailer");
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=1&type=video&key=${API_KEY}`;

    const res = await fetch(url);
    const data = await res.json();
    return data.items?.[0]?.id?.videoId;
  }

  useEffect(() => {
    async function loadTrailer() {
      const id = await fetchYouTubeTrailer(title);
      setVideoId(id);
    }
    loadTrailer();
  }, [title]);

  return (
    <div className="player-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <img src={assets.back_arrow_icon} alt="Back" />
      </button>

      {videoId ? (
        <iframe
          className="trailer-frame"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="YouTube Trailer"
        ></iframe>
      ) : (
        <p className="loading-text">Loading trailer...</p>
      )}
    </div>
  );
};

export default Player;
