import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";
const TitleCards = ({ title, category }) => {
  const cardsref = useRef();

  useEffect(() => {
    const ref = cardsref.current;

    const handleWheel = (event) => {
      event.preventDefault();
      ref.scrollLeft += event.deltaY;
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        ref.scrollLeft += 100;
      } else if (e.key === "ArrowLeft") {
        ref.scrollLeft -= 100;
      }
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
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsref}>
        {cards_data.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
