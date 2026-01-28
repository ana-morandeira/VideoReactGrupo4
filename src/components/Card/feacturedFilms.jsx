import React from 'react';
import Card from './FeaturedCard';
//import FeaturedFilms from './FeaturedFilms';

const filmData = [
  {
    title: "As Bestas",
    genre: "Thriller",
    year: 2022,
    countries: ["🇪🇸", "🇫🇷"],
    poster: "src/assets/images/italia/elMetodo.jpg"
  },
  {
    title: "Wild Tales",
    genre: "Comedy",
    year: 2014,
    countries: ["🇪🇸", "🇦🇷"],
    poster: "src/assets/images/italia/losOtros.jp"
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
  },
  {
    title: "As Bestas",
    genre: "Thriller",
    year: 2022,
    countries: ["🇪🇸", "🇫🇷"],
    poster: "src/assets/images/italia/elMetodo.jpg"
  },
  {
    title: "Wild Tales",
    genre: "Comedy",
    year: 2014,
    countries: ["🇪🇸", "🇦🇷"],
    poster: "src/assets/images/italia/losOtros.jp"
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
    <div className="flex md:flex-col lg:flex-row gap-6 overflow-x-auto px-4 py-8 overflow-x-auto ">

      {filmData.map((film, index) => (
        <div className='min-w-[180px] overflow-hidden'>
        <Card title="Titulo" urlImg={film.poster} key={index} {...film}  className="w-[25%]"/>
        </div>
      ))}
    </div>
  );
};

export default FeaturedCarousel;