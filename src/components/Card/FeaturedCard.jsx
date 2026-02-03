import CountryFeaturedCard from './countryFeaturedCard';

function Card({ title, urlImg, alt = '',countryName }) {
  return (
    <article className='h-full'>
      <div className="relative h-full">
        <CountryFeaturedCard countryName={countryName}/>

        <img
          src={urlImg}
          alt={alt || title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-black p-4 w-full">
        <h4 className="font-bold text-sm">
          {title}
        </h4>
      </div>
    </article>
  );
}

export default Card;
