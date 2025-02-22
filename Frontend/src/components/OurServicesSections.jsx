import React from "react";
import { NavLink } from "react-router-dom";
import { FaShieldAlt, FaChartPie, FaCode,FaDigitalTachograph, FaPaintBrush, FaPenNib, FaVideo } from "react-icons/fa";

const services = [
  {
    title: "Website Design and Development",
    description:
      "We design and develop both static and dynamic websites for different sectors.",
    icon: <FaShieldAlt size={40} />,
    link: "/website-development",
  },
  {
    title: "Custom Web Application Development",
    description:
      "We are experienced in developing custom web applications for a variety of businesses.",
    icon: <FaChartPie size={40} />,
    link: "/web-app-development",
  },
  {
    title: "Digital Media",
    description: "We create and manage digital media strategies to grow your brand online.",
    icon: <FaDigitalTachograph size={40} />,
    link: "/digital-media",
  },
  {
    title: "Designing",
    description: "Our creative team designs stunning visuals that align with your brand identity.",
    icon: <FaPaintBrush size={40} />,
    link: "/designing",
  },
  {
    title: "Content Creation",
    description: "We develop engaging content, from blogs to social media, that drives engagement.",
    icon: <FaPenNib size={40} />,
    link: "/content-creation",
  },
  {
    title: "Media Production",
    description: "We produce high-quality videos and media content for your business needs.",
    icon: <FaVideo size={40} />,
    link: "/media-production",
  },

];

const OurServicesSections = () => {
   return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <h3 className="text-yellow-500 font-semibold tracking-wide uppercase">
          Our Services
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#051224] mt-2">
          Custom IT Solutions for <br /> Your Successful Business
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <NavLink
              to={service.link}
              key={index}
              className="bg-orange-50 rounded-lg shadow-md p-8 text-center transform transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-500 text-white p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#051224]">
                {service.title}
              </h3>
              <p className="text-[#051224] mt-2">{service.description}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};


export default OurServicesSections

