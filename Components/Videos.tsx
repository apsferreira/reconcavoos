import React from "react";

const Videos = () => {
  return (
    <div
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[5rem]"
      id="videos"
    >
      <h1 className="heading">
        Nossos <span className="text-red-500">Vídeos</span>
      </h1>
      
      <div className="w-[90%] mx-auto pt-[2rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
          
          {/* Vídeo Principal */}
          <div data-aos="fade-up" data-aos-delay="200" className="md:col-span-2 lg:col-span-3">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/obkrMiyDrbs?autoplay=1&mute=1&loop=1&playlist=obkrMiyDrbs"
                title="Vídeo Principal - RECONCAVOOS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-white text-[20px] font-semibold mt-[1rem] text-center">
              Vídeo Principal - RECONCAVOOS
            </h3>
          </div>

          {/* Vídeo 1 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo 1 - RECONCAVOOS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-white text-[18px] font-semibold mt-[1rem] text-center">
              Vídeo Institucional
            </h3>
          </div>

          {/* Vídeo 2 */}
          <div data-aos="fade-up" data-aos-delay="400">
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo 2 - RECONCAVOOS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-white text-[18px] font-semibold mt-[1rem] text-center">
              Cobertura de Evento
            </h3>
          </div>

          {/* Vídeo 3 */}
          <div data-aos="fade-up" data-aos-delay="500">
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo 3 - RECONCAVOOS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-white text-[18px] font-semibold mt-[1rem] text-center">
              Drone FPV
            </h3>
          </div>

          {/* Vídeo 4 */}
          <div data-aos="fade-up" data-aos-delay="600">
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo 4 - RECONCAVOOS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-white text-[18px] font-semibold mt-[1rem] text-center">
              Vídeo Comercial
            </h3>
          </div>

          {/* Vídeo 5 */}
          <div data-aos="fade-up" data-aos-delay="700">
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo 5 - RECONCAVOOS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-white text-[18px] font-semibold mt-[1rem] text-center">
              Podcast
            </h3>
          </div>

          {/* Vídeo 6 */}
          <div data-aos="fade-up" data-aos-delay="800">
            <div className="relative w-full h-[250px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Vídeo 6 - RECONCAVOOS"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <h3 className="text-white text-[18px] font-semibold mt-[1rem] text-center">
              Retrato Corporativo
            </h3>
          </div>

        </div>

        {/* Botão para ver mais vídeos */}
        <div className="text-center mt-[3rem]">
          <a
            href="https://www.youtube.com/@reconcavoosfilms"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-[2rem] py-[1rem] bg-red-500 hover:bg-red-600 transition-all duration-200 text-white font-semibold text-[18px] rounded-lg"
          >
            Ver Mais Vídeos no YouTube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos;
