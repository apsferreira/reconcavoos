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
          src="https://www.youtube.com/embed/obkrMiyDrbs?autoplay=1&mute=0&loop=1&playlist=obkrMiyDrbs&controls=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&cc_load_policy=0&disablekb=1&start=0&end=0&playsinline=1"
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
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Discreet content overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-20 z-10">
        <div className="text-center px-4">
          <p className="text-white text-[16px] md:text-[18px] mb-6 opacity-80 font-light">
            Transformando histórias em experiências visuais marcantes
          </p>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            onClick={() => window.open('https://wa.me/5575999838159', '_blank')}
          >
            Solicitar Orçamento
          </button>
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
