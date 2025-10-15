import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]" id="about">
      <div className="w-[80%] mx-auto">
        <div className="text-center">
          <h1 className="text-[20px] font-bold uppercase text-red-500 mb-[1rem] ">
            SOBRE A <span className="text-red-500">RECONCAVOOS</span>
          </h1>
          <h2
            className="text-[25px] font-bold md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem]
          text-white"
          >
            Transformando <span className="text-red-500">Histórias em Experiências Visuais</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-[3rem]">
            <p className="text-[19px] text-slate-300 leading-relaxed mb-[2rem]">
              A RECONCAVOOS é uma produtora audiovisual nascida no coração do Recôncavo Baiano, 
              em Santo Amaro. Nossa missão é criar narrativas autênticas que conectam pessoas 
              e impulsionam marcas através de experiências visuais marcantes.
            </p>
            
            <p className="text-[19px] text-slate-300 leading-relaxed mb-[2rem]">
              Com criatividade e sensibilidade, traduzimos histórias em vídeos institucionais, 
              comerciais, coberturas de eventos, podcasts e imagens com drone FPV. Cada projeto 
              é uma oportunidade de capturar a essência única de nossos clientes e transformar 
              suas visões em conteúdo audiovisual de alta qualidade.
            </p>
            
            <p className="text-[19px] text-slate-300 leading-relaxed mb-[3rem]">
              Acreditamos que cada história merece ser contada com excelência técnica e 
              sensibilidade artística, criando conexões emocionais que fazem a diferença 
              no mundo digital.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a
              href="https://wa.me/5575999838159"
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 transition-all duration-200 px-[2rem] py-[1rem] rounded-lg"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp className="w-[2rem] h-[2rem] text-white" />
              <p className="text-[18px] font-semibold text-white">Entre em Contato</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
