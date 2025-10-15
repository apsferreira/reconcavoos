import Image from "next/image";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px] font-bold uppercase text-red-500 mb-[1rem] ">
            SOBRE A <span className="text-red-500">RECONCAVOOS</span>
          </h1>
          <h2
            className="text-[25px] font-bold md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem]
          text-white"
          >
            Transformando <span className="text-red-500">Histórias em Experiências Visuais</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px]  bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-300 w-[80%] ">
              A RECONCAVOOS é uma produtora audiovisual nascida no coração do Recôncavo Baiano, 
              em Santo Amaro. Nossa missão é criar narrativas autênticas que conectam pessoas 
              e impulsionam marcas através de experiências visuais marcantes. 
              
              Com criatividade e sensibilidade, traduzimos histórias em vídeos institucionais, 
              comerciais, coberturas de eventos, podcasts e imagens com drone FPV. Cada projeto 
              é uma oportunidade de capturar a essência única de nossos clientes e transformar 
              suas visões em conteúdo audiovisual de alta qualidade.
              
              Acreditamos que cada história merece ser contada com excelência técnica e 
              sensibilidade artística, criando conexões emocionais que fazem a diferença 
              no mundo digital.
            </p>
          </div>
          <a
              href="https://wa.me/5575999838159"
            className="flex items-center space-x-2 "
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp className="w-[4rem] h-[4rem]  text-red-500 hover:text-red-400 transition-all duration-200" />
            <p className="text-[20px] font-semibold text-white">Entre em Contato</p>
          </a>
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-[500px] lg:h-[500px] relative mx-auto md:mx-0 mt-[2rem] lg:mt-0 w-[300px] h-[300px]"
        >
          <Image
            src="/images/reconcavoos.jpg"
            alt="RECONCAVOOS - Produtora Audiovisual"
            fill
            style={{ objectFit: "cover" }}
            className="relative z-[11] object-cover rounded-lg"
          />
          <div className="absolute w-[80%] h-[100%] z-[10] bg-red-500 top-[-2rem] right-[1.5rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
