import React from "react";

const VideoHero = () => {
  return (
    <div
      className="bg-black pt-[4rem] md:pt-[8rem] pb-[5rem]"
      id="video-hero"
    >
      <div className="w-[90%] mx-auto pt-[2rem]">
        <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/obkrMiyDrbs?autoplay=1&mute=1&loop=1&playlist=obkrMiyDrbs&controls=1&showinfo=0&rel=0"
            title="Vídeo Principal - RECONCAVOOS"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
        
        <div className="text-center mt-[2rem]">
          <h2 className="text-white text-[24px] md:text-[32px] font-bold mb-[1rem]">
            Uma Produtora Audiovisual no Recôncavo Baiano
          </h2>
          <p className="text-white text-[18px] md:text-[20px] opacity-80 max-w-4xl mx-auto">
            Especializada em criar narrativas autênticas que impulsionam marcas e conectam pessoas. 
            Com criatividade e sensibilidade, desenvolvemos projetos que traduzem histórias em experiências visuais marcantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
