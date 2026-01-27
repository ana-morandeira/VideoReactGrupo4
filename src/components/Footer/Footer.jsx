import { FaFacebookF, FaInstagram, FaRegEnvelope, FaThreads } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-6 px-8 font-serif border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* LADO IZQUIERDO: LOGO Y REDES */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="mb-10 mt-10">
              <img 
                src="src/assets/logos/iberianMovieLogo.svg" 
                alt="Iberian Movie Logo" 
                className="w-40 h-auto"
              />
            </div>

            <div className="flex gap-2">
              {[FaFacebookF, FaInstagram, FaRegEnvelope, FaThreads].map((Icon, index) => (
                <div 
                  key={index} 
                  className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center transition-all cursor-pointer text-white hover:text-[#c5a04a] border border-transparent hover:border-[#c5a04a]/50"
                >
                  <Icon size={35} />
                </div>
              ))}
            </div>
          </div>

          {/* LADO DERECHO: NAVEGACIÓN Y LEGAL (CENTRADO) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 pt-14 justify-items-center">
            
            {/* Navegación */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#c5a04a] font-bold text-[11px] uppercase tracking-[0.3em] mb-6">
                Navegación
              </h3>
              <ul className="space-y-4 text-sm">
                {['Inicio', 'Festivales', 'Premios'].map((item) => (
                  <li 
                    key={item}
                    className="text-white hover:text-[#c5a04a] hover:font-bold cursor-pointer transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[#c5a04a] font-bold text-[11px] uppercase tracking-[0.3em] mb-6">
                Legal
              </h3>
              <ul className="space-y-4 text-sm">
                {['Prensa', 'Soporte', 'Colaboraciones'].map((item) => (
                  <li 
                    key={item}
                    className="text-white hover:text-[#c5a04a] hover:font-bold cursor-pointer transition-all duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest">
          <p className="text-white">© 2026 IBERIAN MOVIE — Todos los derechos reservados</p>
          
          <div className="flex gap-6 mt-4 md:mt-0 text-white">
            <span className="hover:text-[#c5a04a] hover:font-bold cursor-pointer transition-all">Privacidad</span>
            <span className="hover:text-[#c5a04a] hover:font-bold cursor-pointer transition-all">Términos</span>
            <span className="hover:text-[#c5a04a] hover:font-bold cursor-pointer transition-all">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;