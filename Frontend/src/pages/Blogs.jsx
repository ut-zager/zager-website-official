
  import React from 'react' 
  import axios from 'axios';
  import { useEffect, useState } from "react";
  import 'flowbite';
  
  
  
  const Blogs = () => {
    // const [blogs, setBlogs] = useState([]);

    // useEffect(() => {
    //   axios
    //     .get("https://localhost:5000/api/blogs/") // Replace with your actual API endpoint
    //     .then((response) => {
    //       setBlogs(response.data);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching blogs:", error);
    //     });
    // }, []);
    return (
      <div></div>
      // <section className="bg-white text-black py-12">
      //   <div className="max-w-6xl mx-auto px-6">
      //     {/* Section Header */}
      //     <h2 className="text-4xl font-bold text-[#ffbe00] text-center">Our Blog</h2>
      //     <p className="text-center mt-2 text-lg text-gray-600">
      //       Stay updated with our latest articles and insights.
      //     </p>
  
      //     {/* Blog Cards */}
      //     <div className="mt-8 grid gap-6 md:grid-cols-2">
      //       {blogs.map((blog) => (
      //         <div key={blog.id} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      //           <p className="text-sm text-gray-500">{blog.category} • {new Date(blog.date).toDateString()}</p>
      //           <h3 className="text-xl font-bold mt-2">{blog.title}</h3>
      //           <p className="text-gray-700 mt-2">{blog.description}</p>
                
      //           {/* Author and Read More */}
      //           <div className="mt-4 flex items-center justify-between">
      //             <div className="flex items-center gap-3">
      //               <img src={blog.authorImage} alt={blog.author} className="w-8 h-8 rounded-full" />
      //               <p className="font-semibold">{blog.author}</p>
      //             </div>
      //             <a href={`/blog/${blog.id}`} className="text-blue-600 hover:underline flex items-center">
      //               Read more →
      //             </a>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>
    );
  };
    
  export default Blogs;

