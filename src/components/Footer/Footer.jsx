import { FaFacebookF, FaInstagram, FaRegEnvelope, FaThreads } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-500 py-10 px-8 font-serif border-t border-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {}
        <div className="md:col-span-6">
          <div className="flex items-center gap-3 mb-6">
           {}
            <img 
              src="src/assets/logos/iberianMovieLogo.svg" 
              alt="Iberian Movie Logo" 
              className="w-30 h-auto"
            />
            <h2 className="text-[#c5a04a] text-1xl font-bold tracking-tighter italic">
              
            </h2>
          </div>
          
          <p className="text-sm leading-relaxed mb-10 max-w-md">
            Plataforma dedicada a la promoción y archivo del talento cinematográfico ibérico e internacional. Un puente entre culturas a través del séptimo arte.
          </p>

          {}
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer text-gray-400 hover:text-white">
              <FaFacebookF size={30} />
            </div>
            <div className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer text-gray-400 hover:text-white">
              <FaInstagram size={30} />
            </div>
            <div className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer text-gray-400 hover:text-white">
              <FaRegEnvelope size={30} />
            </div>
            <div className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer text-gray-400 hover:text-white">
              <FaThreads size={30} />
            </div>
          </div>
        </div>

        {/* Lado Derecho: Navegación y Legal (Ocupa 6 de 12 columnas) */}
        <div className="md:col-span-6 grid grid-cols-2 gap-8 pt-14">
          {/* Navegación */}
          <div>
            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Navegación</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Inicio</li>
              <li className="hover:text-white cursor-pointer transition-colors">Festivales</li>
              <li className="hover:text-white cursor-pointer transition-colors">Premios</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">Prensa</li>
              <li className="hover:text-white cursor-pointer transition-colors">Soporte</li>
              <li className="hover:text-white cursor-pointer transition-colors">Colaboraciones</li>
            </ul>
          </div>
        </div>

      </div>


      <div className="max-w-6xl mx-auto mt-16 pt-8   flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
        <p>© 2026 IBERIAN MOVIE — Todos los derechos reservados</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>PRIVACIDAD</span>
          <span>TÉRMINOS</span>
          <span>COOKIES</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

