import React from "react";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h3 className="text-yellow-500 font-semibold tracking-wide uppercase">
              About Us
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 leading-tight">
              Empowering Your Business <br /> with Digital Innovation
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              We are a passionate team of designers, developers, and strategists dedicated to crafting cutting-edge solutions. Our goal is to help businesses thrive in the digital landscape by providing top-notch web development, media production, and creative design services.
            </p>
            <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://images.pexels.com/photos/4549411/pexels-photo-4549411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About Us"
              className="rounded-lg shadow-lg w-full md:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
