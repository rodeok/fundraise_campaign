import React from 'react';
import Link from 'next/link';
import { FaHandHoldingHeart } from 'react-icons/fa';
// import Footer from '@/components/Footer';
// import Header from '@/components/Header';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* <Header/> */}
        <div className="text-center mb-8">
          <FaHandHoldingHeart className="text-6xl text-blue-500 mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Fundraising Website
          </h1>
          <p className="text-gray-600">Join us in supporting various causes.</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/campaign"  className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md shadow-md transition duration-300">
              View Campaigns
          </Link>
          <Link href="/create"  className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-md shadow-md transition duration-300">
              Create Campaign
          </Link>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;