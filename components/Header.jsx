import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto px-4 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-xl">
           Fundraising Website
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 19a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link href="/campaigns" className="text-gray-400 hover:text-white">
            Campaigns
          </Link>
          <Link href="/create"  className="text-gray-400 hover:text-white">
            Create Campaign
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;