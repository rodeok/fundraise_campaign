import React from 'react';
import Link from 'next/link';
import { FaHeart, FaShareAlt } from 'react-icons/fa';

const Campaign = ({ campaign }) => {
  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex">
      <div className="md:flex-shrink-0">
        <img
          className="h-48 w-full object-cover md:h-auto md:w-48"
          src={campaign.imageUrl}
          alt={campaign.title}
        />
      </div>
      <div className="p-4 md:p-6 flex-grow">
        <h2 className="text-2xl font-bold mb-2">
          <Link href={`/campaigns/${campaign.id}`}>
            <a className="hover:text-blue-500">{campaign.title}</a>
          </Link>
        </h2>
        <p className="text-gray-700 mb-4">{campaign.description}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">
              <span className="font-bold">${campaign.raisedAmount}</span> raised
              of ${campaign.targetAmount}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{
                  width: `${(campaign.raisedAmount / campaign.targetAmount) * 100}%`,
                }}
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <FaHeart className="text-lg" />
            </button>
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <FaShareAlt className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;