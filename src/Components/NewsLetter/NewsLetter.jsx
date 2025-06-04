import React from 'react';

const NewsLetter = () => {
    return (
    <div className="min-h-screen bg-gradient-to-br mt-20 from-purple-600 to-blue-400 flex items-center justify-center p-4 rounded-md">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-md relative">
        <span className="absolute top-4 left-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          NEW !
        </span>

        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Subscribe"
            className="w-20 h-20"
          />
        </div>

        <h2 className="text-center text-2xl text-neutral font-bold mb-2">SUBSCRIBE</h2>
        <p className="text-center text-gray-500 mb-6">
          Subscribe to our newsletter & stay updated!
        </p>

        <form className="flex items-center gap-2">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-grow shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z"
              />
            </svg>
            <input
              type="email"
              placeholder="Your Email_"
              className="bg-transparent outline-none flex-grow text-sm text-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            SUBMIT &gt;
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;