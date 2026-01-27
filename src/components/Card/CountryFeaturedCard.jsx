

function CountryFeaturedCard({ countryImg,countryAlt, countryName }) {
    return (
        <div className="flex absolute bottom-2 left-2 ">
            <img src={countryImg} alt={countryAlt} className="country-image" />
            <h3 className="text-white py-1 px-3 bg-black rounded-xl text-sm">{countryName}</h3>
        </div>
    );
}
export default CountryFeaturedCard;