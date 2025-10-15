import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]"
      id="projects"
    >
      <h1 className="heading">
        Nossos <span className="text-red-500">Projetos</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[2rem] flex justify-center">
        <div data-aos="fade-up">
          <div className="trasnsform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[400px] md:h-[500px] max-w-[800px] bg-gray-900 rounded-lg overflow-hidden">
            <a
              href="https://antoniopedro.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/antoniopedro-portfolio.svg"
                alt="Antonio Pedro - Portfolio"
                fill
                className="object-cover rounded-lg shadow-lg"
                style={{ objectFit: "cover" }}
              />
            </a>
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">Antonio Pedro</h3>
              <p className="text-gray-300 text-sm">Portfolio pessoal desenvolvido com Next.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
