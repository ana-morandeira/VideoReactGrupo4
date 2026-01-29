import React from 'react';
import Card from './FeaturedCard';
//import FeaturedFilms from './FeaturedFilms';



export default function FeacturedFilms({movies = []})  {
  return (
    <div className="flex md:flex-col lg:flex-row gap-6 overflow-x-auto px-4 py-8 overflow-x-auto ">

      {movies.map((movie) => (
        <div key={movie.id} className='min-w-[180px] overflow-hidden'>
        <Card  title="Titulo" urlImg={movie.imagen}   className="w-[25%]"/>
        </div>
      ))}
    </div>
  );
};

