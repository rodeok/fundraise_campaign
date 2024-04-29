import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-white font-bold text-lg">Fundraising Website</h3>
          <p className="text-gray-400">Join us in making a difference.</p>
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;