import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTwitter, FaYoutube,FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-10 px-6  dark:bg-black">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4 animate-fade-in">Student Management System</h1>
        <p className="text-lg mb-6 text-gray-300">It is an simple student Management system || Ayush Devloper</p>


        <div className="flex justify-center gap-10 mb-8">
          <Link to="/" className="text-white text-lg hover:text-yellow-300 transition">Home</Link>

        </div>

       
        <div className="flex justify-center gap-6 mb-6 text-2xl">
          <a href="https://www.instagram.com/direct/t/ 56964672033/" target="_blank"  className="hover:text-pink-400 transition">
            <FaInstagram />
          </a>
          <a href="https://wa.me/7897573949" target="_blank"  className="hover:text-green-400 transition">
            <FaWhatsapp />
          </a>
         
          <a href="mailto:ayurajput249@gmail.com" target="_blank"  className="hover:text-sky-400 transition">
           <FaGoogle/>
          </a>
          <a href="https://www.youtube.com/@ayushtechbee" target="_blank"  className="hover:text-red-500 transition">
            <FaYoutube />
          </a>
        </div>

        <div className="text-sm text-gray-300">
          <p>&copy;2025 Student Manager. All right reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
