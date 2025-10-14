import { CodeBracketSquareIcon } from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
      id="services"
    >
      <p className="heading">
        Meus <span className="text-yellow-400">Serviços</span> & RECONCAVOS
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] w-[80%] mx-auto items-center mt-[4rem] text-white">
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]  ">
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Desenvolvimento Frontend
            </h1>
            <p className="text-[18px] text-[#d3d2d2] font-normal">
              Desenvolvedor Frontend com ampla experiência em tecnologias como
              JavaScript, TypeScript, React.js, Next.js, Node.js, Bootstrap,
              SCSS, Tailwind CSS, Styled Components e práticas ágeis. Meu foco é
              entregar projetos de alta qualidade no menor tempo possível,
              sempre buscando superar as expectativas.
            </p>
          </div>
        </div>
        
        <div data-aos="zoom-in" data-aos-delay="600">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]">
            <div className="w-[6rem] h-[6rem] mx-auto text-white flex items-center justify-center">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              RECONCAVOS
            </h1>
            <p className="text-[18px] text-[#d3d2d2] font-normal">
              Empresa especializada em soluções digitais inovadoras. Transformamos 
              ideias em realidade através de desenvolvimento web, aplicações móveis 
              e consultoria em tecnologia. Nossa missão é criar experiências digitais 
              que conectam pessoas e impulsionam negócios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
