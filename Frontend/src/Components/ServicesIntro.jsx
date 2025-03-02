import React from "react";
import mountain from '../assets/bg.jpg'; // Ensure the correct path
import logo from '../assets/Final_Logo_White.png'

// import React from "react";
// import maestroImage from "../assets/maestro.jpg";  Replace with your actual image path

const ServicesIntro = () => {
  return (
    <section className="w-full py-16 px-6 text-center">
      {/* Heading */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-black leading-tight">
          Partner with{" "}
          <span className="text-[#ffbe00]">#1 Digital Marketing Agency</span> in India
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          Discover a suite of tailored solutions designed to elevate your brand in the digital realm.
          At <span className="font-semibold">Socialee</span>, we specialize in a range of services
          that synergize to maximize your online presence and drive tangible results.
        </p>
      </div>

      {/* Image with text overlay */}
      <div className="mt-10 flex justify-center">
        <div className="relative rounded-2xl overflow-hidden w-[50%] shadow-lg">
          <img
            src={mountain}
            alt="Digital Media Maestro"
            className="w-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-start p-8  bg-opacity-50">
            <div className="text-left text-white">
              <h3 className="text-2xl md:text-3xl font-semibold">
                We are your
              </h3>
              <h3 className="text-3xl md:text-4xl font-bold mt-2">
                <span className="bg-[#ffbe00] text-white px-2 py-1 rounded">
                  DIGITAL MEDIA MAESTRO
                </span>
              </h3>
              <p className="mt-3 text-lg italic">
                Crafting Your Symphony of Digital Impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;

