import React, { useRef } from "react";
import Card from "./FeaturedCard";

export default function FeaturedFilms({ movies = [], title, countryName}) {
  const carouselRef = useRef(null);

  const scrollDirection = (direction) => {
    const carousel = carouselRef.current;

    const firstCard = carousel.children[0];

    const cardWidth = firstCard.offsetWidth + 24;

    carousel.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-[90%] m-auto mb-8">
      <h2 className="text-3xl mb-8">{title}</h2>
      <button
        className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-20 text-yellow hidden lg:flex text-3xl"
        onClick={() => scrollDirection("left")}
      >
       ⬅️ 
      </button>

      <button
        className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex text-3xl"
        onClick={() => scrollDirection("right")}
      >
        ➡️
      </button>

      <div
        ref={carouselRef}
        className="flex gap-6 scroll-smooth overflow-x-auto no-scrollbar"
      >
        {movies.map((movie) => (
          <div key={movie.id} className="shrink-0 w-[25%]">
            <Card urlImg={movie.imagen} alt="Carrousel" countryName={countryName} />
          </div>
        ))}
      </div>
    </section>
  );
}
