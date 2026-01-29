// function Card({ image, title, subtitle, year, duration }) {
//     return (
//         <div className="group relative w-[180px] h-[270px] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300">
//             {/* Imagen del póster */}
//             <img
//                 src={image}
//                 alt={title}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//             />

//             {/* Overlay que aparece al hover */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
//                 {/* Badge de Exclusivo */}
//                 <span className="text-xs uppercase tracking-wide text-orange-400 font-semibold mb-1">
//                     {subtitle}
//                 </span>

//                 {/* Título */}
//                 <h3 className="text-white text-sm font-bold leading-tight mb-1">
//                     {title}
//                 </h3>

//                 {/* Año y duración */}
//                 <p className="text-gray-300 text-xs mb-2">
//                     {year} • {duration}
//                 </p>

//                 {/* Botón Ver ahora */}
//                 <button className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded hover:bg-orange-600 transition-colors">
//                     ▶ Ver ahora
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Card;
import CountryFeaturedCard from './countryFeaturedCard';


function Card({title,urlImg,alt}) {
    return (
        <article className=" text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow h-[400px] w-[300px] flex flex-col">
            <div className='h-[80%] relative'>
                <CountryFeaturedCard countryName="Spain" countryImage={urlImg} className=""/>
                 
            </div>
            <div className="bg-black p-4 h-[20%]">
                <h4 className="font-bold">{title}</h4>
            </div>
            
        </article>
        
    );
}
export default Card;