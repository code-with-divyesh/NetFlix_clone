import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";

const API_KEY = import.meta.env.VITE_WATCHMODE_API_KEY;

const TitleCards = ({ title, listUrl }) => {
  const cardsRef = useRef();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!listUrl) return;

    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const res = await fetch(`${listUrl}&apiKey=${API_KEY}`);
        const data = await res.json();
        const titles = data.titles || [];
        if (titles.length === 0) {
          setError(true);
          setMovies([]);
          return;
        }
        const detailedData = await Promise.all(
          titles.map(async (movie) => {
            const detailUrl = `https://api.watchmode.com/v1/title/${movie.id}/details/?apiKey=${API_KEY}`;
            const res = await fetch(detailUrl);
            const detail = await res.json();
            return {
              id: movie.id,
              title: movie.title,
              poster: detail.poster,
            };
          })
        );

        setMovies(detailedData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [listUrl]);

  useEffect(() => {
    const ref = cardsRef.current;
    const handleWheel = (event) => {
      event.preventDefault();
      ref.scrollLeft += event.deltaY;
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") ref.scrollLeft += 100;
      else if (e.key === "ArrowLeft") ref.scrollLeft -= 100;
    };

    if (ref) {
      ref.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (ref) ref.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="title-cards">
      <h2>{title || "Popular Movies"}</h2>

      {loading ? (
        <div className="spinner">Loading...</div> // Add CSS
      ) : error ? (
        <div className="error">Failed to load movies or no results found.</div>
      ) : (
        <div className="card-list" ref={cardsRef}>
          {movies.map((movie) => (
            <div className="card" key={movie.id}>
              {movie.poster ? (
                <img src={movie.poster} alt={movie.title} />
              ) : (
                <div className="no-poster">No Image</div>
              )}
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TitleCards;
