import React, { useState } from 'react';

const Gallery = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "" });

  const sliderData = [
    ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"],
    ["12.jpeg", "5.jpeg", "6.jpeg", "7.jpeg"],
    ["8.jpeg", "9.jpeg", "10.jpeg", "11.jpeg"]
  ];

  const openLightbox = (src) => setLightbox({ isOpen: true, src });

  return (
    <section className="sliders-section pb-20 relative z-10">
      {sliderData.map((row, i) => (
        <div key={i} className="slider-wrapper mb-12 overflow-hidden">
          <div className={`flex gap-8 animate-slide ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}>
            {[...row, ...row, ...row].map((img, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[450px] h-[280px] rounded-3xl overflow-hidden border border-white/5 cursor-pointer hover:scale-[1.02] transition-transform duration-700 bg-[#0a0a0a]"
                onClick={() => openLightbox(`/${img}`)}
              >
                <img src={`/${img}`} alt="Gallery Item" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      ))}

      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setLightbox({ isOpen: false, src: "" })}
        >
          <img src={lightbox.src} className="max-w-[90%] max-h-[90%] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10" alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default Gallery;