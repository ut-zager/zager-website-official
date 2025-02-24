import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import left from "../assets/left.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Testimonial from "../Components/Testimonial";
import ContactForm from "../Components/ContactForm";
import AboutUsSection from "../Components/AboutUsSection";
import OurServicesSections from "../Components/OurServicesSections";
import OurProducts from "../Components/Products";
import Clients from "../Components/Client";

const HeroSection = () => {
    useGSAP(() => {
      gsap.from(".content-div", { 
        x:-200,
        opacity: 0, 
        duration: 1,
        delay: 0.5
         });
    });

    useGSAP(()=>{
      gsap.from(".image-div", { 
        x:200,
        opacity: 0, 
        duration: 1,
        delay: 0.5
         });
    });

  return (
    <>
      <section className=" min-h-[86vh] w-full flex items-center overflow-hidden">
      <div className="relative w-full h-full  flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-between w-4/5 text-black md:flex-row flex-col">
            <div className="content-div flex-1 md:text-center text-center">
              <h1 className="text-5xl font-bold mb-2 tracking-tighter md:text-center text-center lg:text-5xl md:text-4xl sm:text-3xl ">
                Empowering Businesses with <br />
                <span className="text-[#ffbe00]">IT</span> Solutions <br />
                &<br />
                Digital <span className="text-[#ffbe00]">Marketing</span>
              </h1>

              <p className="text-xl md:text-lg sm:text-base">
                We provide cutting-edge solutions to elevate your business.
              </p>

              <div className="flex md:flex-row flex-col items-center justify-center gap-4 w-full mt-4">
                <button className="bg-[#ffbe00] text-white px-5 py-2.5 rounded-md hover:bg-[#d7a205] transition-colors duration-300 md:w-auto w-full">
                  Get Started
                </button>
                <button className="bg-transparent text-[#ff4757] px-5 py-2.5 rounded-md border-2 border-[#ff4757] transition-colors duration-300 md:w-auto w-full">
                  Learn More
                </button>
              </div>
            </div>

            <div className="image-div flex-1 flex justify-center mt-8 md:mt-0">
              <img
                src={left}
                alt="Hero"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <OurServicesSections/>
    <AboutUsSection/>
    <OurProducts/>
    <Clients/>
    <ContactForm/>
    <Testimonial/>
    </>


  );
};

export default HeroSection;
