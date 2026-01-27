import { FaFacebookF, FaInstagram, FaRegEnvelope, FaThreads } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-10 px-8 font-serif border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        
        {/* SECCIÓN SUPERIOR: GRID PRINCIPAL */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* LADO IZQUIERDO: LOGO Y REDES */}
          <div className="md:col-span-6 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-10 mt-10">
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
                  className="w-10 h-10 bg-[#1a1a1a] rounded flex items-center justify-center hover:bg-gray-800 transition-all cursor-pointer text-gray-400 hover:text-[#c5a04a]"
                >
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* LADO DERECHO: NAVEGACIÓN Y LEGAL (CENTRADO Y CON HOVER DORADO) */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 pt-14 justify-items-center"> 
            
            {/* Columna Navegación */}
            <div className="flex flex-col items-center"> 
              <h3 className="text-[#c5a04a] font-bold text-[11px] uppercase tracking-[0.3em] mb-6">
                Navegación
              </h3>
              <ul className="space-y-4 text-sm text-gray-500 text-center">
                <li className="hover:!text-[#c5a04a] cursor-pointer transition-all duration-200 hover:translate-x-1">
                  Inicio
                </li>
                <li className="hover:!text-[#c5a04a] cursor-pointer transition-all duration-200 hover:translate-x-1">
                  Festivales
                </li>
                <li className="hover:!text-[#c5a04a] cursor-pointer transition-all duration-200 hover:translate-x-1">
                  Premios
                </li>
              </ul>
            </div>

            {/* Columna Legal */}
            <div className="flex flex-col items-center">
              <h3 className="text-[#c5a04a] font-bold text-[11px] uppercase tracking-[0.3em] mb-6">
                Legal
              </h3>
              <ul className="space-y-4 text-sm text-gray-500 text-center">
                <li className="hover:!text-[#c5a04a] cursor-pointer transition-all duration-200 hover:translate-x-1">
                  Prensa
                </li>
                <li className="hover:!text-[#c5a04a] cursor-pointer transition-all duration-200 hover:translate-x-1">
                  Soporte
                </li>
                <li className="hover:!text-[#c5a04a] cursor-pointer transition-all duration-200 hover:translate-x-1">
                  Colaboraciones
                </li>
              </ul>
            </div>
          </div>
        </div> {/* <--- ESTE CIERRE FALTABA (Cierra el Grid Principal) */}

        {/* BARRA INFERIOR: COPYRIGHT Y LEGALES */}
        <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-gray-500">
          <p>© 2026 IBERIAN MOVIE — Todos los derechos reservados</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-[#c5a04a] cursor-pointer transition-colors">Privacidad</span>
            <span className="hover:text-[#c5a04a] cursor-pointer transition-colors">Términos</span>
            <span className="hover:text-[#c5a04a] cursor-pointer transition-colors">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;