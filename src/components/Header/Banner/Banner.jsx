import BtnPrimary from "./btnPrimary";

function Banner() {
  return (
    <section className="flex flex-col justify-center flex-1 bg-[url('/src/assets/images/TheSecretInTheirEyes.jpg')] bg-cover bg-center bg-no-repeat w-full m-auto text-black relative">
      <div className="flex flex-col justify-end items-center lg:items-start lg:ml-32 text-center lg:gap-16 p-8 absolute inset-0 bg-black/40 backdrop-blur-[5px]">
        <h2 className="text-white text-3xl lg:text-7xl font-bold">
          El Secreto en sus ojos
        </h2>
        <p className="lg:w-1/3 text-white text-xl lg:text-3xl text-left w-full lg:leading-loose opacity-70">
          Un asesor legal jubilado escribe una novela con la esperanza de cerrar
          uno de sus antiguos casos de homicidio, que sigue sin resolver, y
          superar el amor no correspondido que sentía por su jefa. Décadas
          después, ambos recuerdos le siguen persiguiendo.
        </p>
        <div className="flex gap-4 lg:w-1/3 w-full ">
          <BtnPrimary
            textBtn="Ver ahora"
            colorBtn="text-black"
            bgBtn="bg-yellow-600"
            layoutBtn=" lg:w-[50%] w-full m-auto text-center px-2 lg:py-4 lg:text-4xl cursor-pointer"
          />
          <BtnPrimary
            textBtn="Más info"
            colorBtn="text-white backdrop-blur"
            bgBtn="bg-gray-300/30"
            layoutBtn=" lg:w-[50%] w-full m-auto text-center lg:py-4 px-1 lg:text-4xl cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
