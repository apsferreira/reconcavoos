import { 
  VideoCameraIcon, 
  BuildingOfficeIcon, 
  MicrophoneIcon, 
  TvIcon, 
  CameraIcon,
  CalendarDaysIcon
} from "@heroicons/react/20/solid";
import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
      id="services"
    >
      <p className="heading">
        Nossos <span className="text-red-500">Serviços</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] w-[90%] mx-auto items-center mt-[4rem] text-white">
        
        {/* Vídeos Institucionais */}
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <BuildingOfficeIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Vídeos Institucionais
            </h1>
            <p className="text-[18px] text-[#d3d2d2] font-normal">
              Produzimos vídeos corporativos que comunicam a identidade e valores da sua empresa de forma profissional e impactante.
            </p>
          </div>
        </div>

        {/* Retratos Corporativos */}
        <div data-aos="zoom-in" data-aos-delay="400">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CameraIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Retratos Corporativos
            </h1>
            <p className="text-[18px] text-[#d3d2d2] font-normal">
              Sessões fotográficas profissionais para executivos e equipes, criando imagens que transmitem confiança e profissionalismo.
            </p>
          </div>
        </div>

        {/* Podcasts */}
        <div data-aos="zoom-in" data-aos-delay="500">
          <div className="bg-purple-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <MicrophoneIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Podcasts
            </h1>
            <p className="text-[18px] text-[#d3d2d2] font-normal">
              Produção completa de podcasts com qualidade profissional, desde a gravação até a edição e distribuição.
            </p>
          </div>
        </div>

        {/* Vídeos Comerciais */}
        <div data-aos="zoom-in" data-aos-delay="600">
          <div className="bg-green-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <TvIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Vídeos Comerciais
            </h1>
            <p className="text-[18px] text-[#d3d2d2] font-normal">
              Criação de comerciais criativos e impactantes que vendem produtos e serviços de forma eficaz.
            </p>
          </div>
        </div>

        {/* Drone FPV */}
        <div data-aos="zoom-in" data-aos-delay="700">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <VideoCameraIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Drone FPV
            </h1>
            <p className="text-[18px] text-[#d3d2d2] font-normal">
              Imagens aéreas cinematográficas com drone FPV, proporcionando perspectivas únicas e impactantes para seus projetos.
            </p>
          </div>
        </div>

        {/* Cobertura de Eventos */}
        <div data-aos="zoom-in" data-aos-delay="800">
          <div className="bg-indigo-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <CalendarDaysIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Cobertura de Eventos
            </h1>
            <p className="text-[18px] text-[#d3d2d2] font-normal">
              Registro completo de eventos sociais e culturais, capturando momentos únicos com qualidade profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
