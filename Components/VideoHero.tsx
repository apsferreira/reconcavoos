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
