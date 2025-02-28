"use client";
import React from "react";
import { motion } from "framer-motion";
import  Button  from "../components/Button"; // ✅ Adjust relative path

const platforms = [
  {
    title: "Gyaanadari",
    description:
      "Welcome to Gyaanadari, your premier destination for insightful content and engaging media.",
    imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/main",
  },
  {
    title: "JK WORKS",
    description:
      "Welcome to JK Works, your premier partner in architecture and interior design.",
      imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/main",
  },
  {
    title: "IRA MEDIA & PRODUCTION",
    description:
      "Welcome to IRA Media and Production, where creativity meets strategy to bring your media projects to life.",
       imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/main",
  },
  {
    title: "ZMS",
    description: "ZMS - Your trusted source for premium services and solutions.",
    imageUrl:"https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/main",
  },
];

const OurPlatform = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-5 md:px-20">
    <h1 className="text-[#ffbe00] text-4xl font-bold text-center mb-12">
      Our Platform
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {platforms.map((platform, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white shadow-lg rounded-xl overflow-hidden p-5 border border-gray-200 hover:shadow-2xl transition"
        >
          <img
            src={platform.imageUrl}
            alt={platform.title}
            className="w-full h-52 object-cover rounded-md"
          />
          <h2 className="text-2xl font-bold text-[#ffbe00] mt-4">
            {platform.title}
          </h2>
          <p className="text-gray-700 mt-2">{platform.description}</p>
          <a
            href={platform.link}
            className="mt-4 inline-block px-5 py-2 bg-[#ffbe00] text-white rounded-md hover:bg-yellow-600 transition"
          >
            Explore
          </a>
        </motion.div>
      ))}
    </div>
  </div>
  );
};

export default OurPlatform;
