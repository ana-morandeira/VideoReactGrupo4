import React, { useRef } from "react";
import Card from "./FeaturedCard";

export default function FeaturedFilms({ movies = [] }) {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

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
    <section className="relative lg:w-[50%] w-[70%] m-auto">
      <button
        className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-20 text-yellow"
        onClick={() => scrollDirection("left")}
      >
        ◀
      </button>

      <button
        className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-20"
        onClick={() => scrollDirection("right")}
      >
        ▶
      </button>

      <div
        ref={carouselRef}
        className="flex gap-6 scroll-smooth overflow-x-auto no-scrollbar"
      >
        {movies.map((movie) => (
          <div key={movie.id} className="shrink-0 w-[25%]">
            <Card urlImg={movie.imagen} />
          </div>
        ))}
      </div>
    </section>
  );
}
