import BtnPrimary from "./btnPrimary";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section className="flex-1 flex flex-col bg-[url('/src/assets/images/TheSecretInTheirEyes.jpg')] bg-cover bg-center bg-no-repeat w-full relative">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[5px] flex flex-col items-center lg:items-start justify-center text-center lg:text-left p-8 lg:pl-32 ">
        <h2 className="text-white text-4xl lg:text-7xl font-bold">
          El Secreto de sus ojos
        </h2>

        <p className="text-white text-lg lg:text-2xl opacity-70 mt-4 lg:w-2/3 leading-relaxed">
          Un asesor legal jubilado escribe una novela con la esperanza de cerrar
          uno de sus antiguos casos de homicidio, que sigue sin resolver, y
          superar el amor no correspondido que sentía por su jefa. Décadas
          después, ambos recuerdos le siguen persiguiendo.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-1/3 mt-6">
          <Link to="https://www.youtube.com/watch?v=hKa8U-8vsfU">
            <BtnPrimary
              textBtn="Ver ahora"
              colorBtn="text-black"
              bgBtn="bg-yellow-600"
              layoutBtn="flex-1 text-center px-4 py-3 lg:py-4 lg:text-4xl cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Banner;
