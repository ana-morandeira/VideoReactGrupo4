import React from 'react';
//import FeaturedFilms from './FeaturedFilms';

const filmData = [
  {
    title: "As Bestas",
    genre: "Thriller",
    year: 2022,
    countries: ["🇪🇸", "🇫🇷"],
    poster: "/images/as-bestas.jpg"
  },
  {
    title: "Wild Tales",
    genre: "Comedy",
    year: 2014,
    countries: ["🇪🇸", "🇦🇷"],
    poster: "/images/wild-tales.jpg"
  },
  {
    title: "The Others",
    genre: "Horror",
    year: 2001,
    countries: ["🇪🇸", "🇺🇸"],
    poster: "/images/the-others.jpg"
  },
  {
    title: "Pan's Labyrinth",
    genre: "Fantasy",
    year: 2006,
    countries: ["🇪🇸", "🇲🇽"],
    poster: "/images/pans-labyrinth.jpg"
  }
];

const FeaturedCarousel = () => {
  return (
    <div className="flex gap-6 overflow-x-auto px-4 py-8 scrollbar-hide">

      {filmData.map((film, index) => (
        <FeaturedFilms key={index} {...film} />
      ))}
    </div>
  );
};

export default FeaturedCarousel;