

function CountryFeaturedCard({ countryImg,countryAlt, countryName }) {
    return (
        <div className="flex absolute top-2 left-2 ">
            <h3 className="text-white py-1 px-3 bg-black rounded-xl text-[10px] lg:text-sm">{countryName}</h3>
        </div>
    );
}
export default CountryFeaturedCard;