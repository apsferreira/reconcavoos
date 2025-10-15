import { MapIcon } from "@heroicons/react/20/solid";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]" id="contact">
      <div
        className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2
         w-[80%] mx-auto gap-[3rem]"
      >
        <div className="flex items-center space-x-4">
          <div
            className="md:w-[5.5rem] md:h-[5.5rem] w-[4rem] h-[4rem] flex items-center justify-center 
          rounded-full bg-red-500"
          >
            <MapIcon className="md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem] text-black" />
          </div>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] text-white font-semibold ">
              Localização
            </h1>
            <p className="text-[15px] w-[90%] text-white opacity-60">
              Santo Amaro-BA
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://wa.me/5575999838159"
            target="_blank"
            rel="noreferrer"
            className="md:w-[5.5rem] md:h-[5.5rem] w-[4rem] h-[4rem] flex items-center justify-center 
          rounded-full bg-red-500"
          >
            <IoLogoWhatsapp className="md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem] text-black hover:text-white" />
          </a>
          <div className="flex flex-col items-center">
            <h1 className="text-[25px] mb-[0.2rem] text-white font-semibold ">
              Entre em Contato
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/reconcavoosfilms/"
            target="_blank"
            rel="noreferrer"
            className="md:w-[5.5rem] md:h-[5.5rem] w-[4rem] h-[4rem] flex items-center justify-center 
          rounded-full bg-red-500"
          >
            <FaInstagram className="md:w-[4rem] md:h-[4rem] w-[2.5rem] h-[2.5rem] text-black hover:text-white" />
          </a>
          <div>
            <h1 className="text-[25px] mb-[0.2rem] text-white font-semibold ">
              Instagram
            </h1>
            <p className="text-[17px] w-[90%] text-white opacity-60">
              @reconcavoosfilms
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] mx-auto mt-[2rem] grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <ScrollLink to="nav" smooth={true} duration={500} offset={-70}>
          <h1 className=" flex-[0.6] cursor-pointer text-[35px] text-white font-bold">
            <span className="text-red-500">IIT</span>
          </h1>
        </ScrollLink>

        <div className="text-[18px] text-white opacity-20 mb-[2rem] md:mb-0">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.linkedin.com/in/apsferreira/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <span>Antonio Pedro Ferreira</span>
            </a>
             - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;