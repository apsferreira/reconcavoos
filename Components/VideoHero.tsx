import React from "react";

const VideoHero = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      id="video-hero"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/obkrMiyDrbs?autoplay=1&mute=1&loop=1&playlist=obkrMiyDrbs&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&disablekb=1&start=0&end=0&playsinline=1"
          title=""
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ 
            border: 'none',
            transform: 'scale(1.1)',
            minWidth: '100%',
            minHeight: '100%'
          }}
        ></iframe>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white text-[48px] md:text-[64px] lg:text-[80px] font-bold mb-6 leading-tight">
            Somos o olhar que amplia percepções
          </h1>
          <p className="text-white text-[20px] md:text-[24px] lg:text-[28px] mb-8 opacity-90 leading-relaxed">
            Criamos narrativas que deixam marcas positivas no mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Assista agora
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Solicite uma proposta
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
