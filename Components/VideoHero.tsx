import React from "react";

const VideoHero = () => {
  return (
    <div
      className="bg-black"
      id="video-hero"
    >
      <div className="w-full">
        <div className="relative w-full h-[100vh]">
          <iframe
            src="https://www.youtube.com/embed/obkrMiyDrbs?autoplay=1&mute=1&loop=1&playlist=obkrMiyDrbs&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=1"
            title=""
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ border: 'none' }}
          ></iframe>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-[2rem]">
          <div className="text-center">
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
    </div>
  );
};

export default VideoHero;
