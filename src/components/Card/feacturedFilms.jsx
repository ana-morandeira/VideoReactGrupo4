// FeaturedFilms.jsx
import React from 'react';
import './FeaturedFilms.css'; // Opcional: para estilos personalizados

const FeaturedFilms = ({ title, genre, year, countries, poster }) => {
  return (
    <div className="featured-film-card">
      <img src={poster} alt={`${title} poster`} className="film-poster" />
      <div className="film-info">
        <h3 className="film-title">{title}</h3>
        <p className="film-meta">{genre} · {year}</p>
        <div className="film-countries">
          {countries.map((country, index) => (
            <span key={index} className="country-flag">{country}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedFilms;