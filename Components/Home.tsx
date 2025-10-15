import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { IoLogoWhatsapp } from "react-icons/io";

const Home = () => {
  return (
    <div
      className="min-h-[60vh] bg-[url('/images/banner.jpg')] bg-cover bg-center py-16"
      id="nav"
    >
      <div className="w-[90%] mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h1 className="text-[35px] lg:text-[50px] font-bold text-white">
            SOMOS A <span className="text-red-500">RECONCAVOOS!</span>
          </h1>
          <TextEffect />
          <p className="text-[18px] text-[#ffffff92] max-w-3xl mx-auto">
            Uma produtora audiovisual localizada em Santo Amaro no Recôncavo baiano, especializada em criar narrativas autênticas que impulsionam marcas e conectam pessoas. Com criatividade e sensibilidade, desenvolvemos projetos que traduzem histórias em experiências visuais marcantes.
          </p>
          <div className="flex-col space-y-4 sm:space-y-0 sm:flex sm:flex-row items-center justify-center sm:space-x-6">
            {/* <a
              href="#"
              download="AntonioFerreira-Curriculo.pdf"
              className="px-[2rem] hover:bg-red-600 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-red-500 text-white flex items-center space-x-2"
            >
              <p>Download Cv</p>
              <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
            </a> */}
            <a
              href="https://wa.me/5575999838159"
              className="flex items-center space-x-2"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoWhatsapp className="w-[4rem] h-[4rem] text-red-500 hover:text-red-400 transition-all duration-200" />
              <p className="text-[20px] font-semibold text-white">Whatsapp</p>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
