import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const products = [
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    name: "Smart Technology Hub",
    description: "Advanced technology solution for seamless integration of your smart devices. Features include AI-powered automation, real-time monitoring, and enhanced security protocols.",
    link: "/products/smart-hub"
  },
  {
    image: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?q=80&w=1919&auto=format&fit=crop",
    name: "Digital Assistant Pro",
    description: "Next-generation digital assistant with voice recognition, task automation, and intelligent scheduling capabilities.",
    link: "/products/digital-assistant"
  },
  {
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1928&auto=format&fit=crop",
    name: "Cloud Security Suite",
    description: "Comprehensive cloud security solution offering advanced threat detection and real-time monitoring.",
    link: "/products/security-suite"
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    name: "Smart Technology Hub",
    description: "Advanced technology solution for seamless integration of your smart devices. Features include AI-powered automation, real-time monitoring, and enhanced security protocols.",
    link: "/products/smart-hub"
  },
];

const OurProducts = () => {
  const carouselRef = useRef(null);
  const [index, setIndex] = useState(0);

  const slide = (direction) => {
    let newIndex = index + direction;
    if (newIndex < 0) newIndex = products.length - 1;
    if (newIndex >= products.length) newIndex = 0;
    setIndex(newIndex);

    gsap.to(carouselRef.current, {
      x: -newIndex * 100 + "%",
      ease: "power2.out",
      duration: 0.8,
    });
  };

  return (
    <div className="py-10 relative overflow-hidden h-[100vh]">
      <h4 style={{ fontWeight: "700", fontSize: "2.5rem", color:"#ffbe00", textShadow:"0 0 12px rgba(238, 201, 115, 0.753)", marginBottom:"0px" }} className="text-3xl font-bold text-center text-[#ffbe00] mb-4">Our Products</h4>
      <div className="relative w-full overflow-hidden">
        <div ref={carouselRef} className="flex w-full transition-transform duration-1000">
          {products.map((product, idx) => (
            <div key={idx} className="flex-shrink-0 w-full flex items-center gap-6 px-20 py-20">
              <div className='w-[60%] h-[400px] md:w-[50%] md:h-[500px] rounded-xl overflow-hidden border-4'>
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col justify-center w-[40%] p-4">
                <h4 className="text-2xl font-medium tracking-tight mb-4 ">{product.name}</h4>
                <p className="text-lg text-gray-500 mb-6">{product.description}</p>
                <a href={product.link} className="bg-[#ffbe00] w-[120px] py-2 px-4 rounded-md hover:scale-110 transition duration-300 !text-white">See Product</a>
              </div>
            </div>
          ))}
        </div>
        {/* Sliding Buttons */}
        <button onClick={() => slide(-1)} className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-500 transition duration-300">&#8592;</button>
        <button onClick={() => slide(1)} className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-500 transition duration-300">&#8594;</button>
      </div>
    </div>
  );
};

export default OurProducts;
