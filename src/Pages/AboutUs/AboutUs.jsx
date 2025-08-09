import React from 'react'

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[300px] sm:min-h-[400px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* Added overlay for text contrast */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 py-20 sm:py-32">
          <p className="text-blue-400 text-xl font-bold tracking-widest mb-2 uppercase">
            ALL YOU NEED TO KNOW
          </p>
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold mb-4">
            <span className="text-yellow-400">ABOUT</span> CLEANING
          </h1>
          <nav className="flex items-center space-x-3 text-white text-base sm:text-lg">
            <a href="/" className="font-bold hover:underline">
              Home
            </a>
            <span>|</span>
            <a href="/" className="hover:underline">
              About Us
            </a>
          </nav>
        </div>
      </section>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-16 px-6 gap-12">
        {/* Left side with image and card */}
        <div className="relative flex-shrink-0 w-full max-w-md h-[460px] mx-auto md:mx-0">
          <div className="absolute top-1/2 left-1/2 w-72 bg-white -translate-x-1/2 -translate-y-1/2 p-8 shadow-lg rounded-md">
            <div className="flex justify-center mb-4">
              {/* Microphone Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 1.5v9m0 0a3 3 0 003-3V4.5a3 3 0 00-6 0v3a3 3 0 003 3zm6 4.5v1.5a6 6 0 01-12 0V10.5m6 7.5v3m-4.5 0h9"
                />
              </svg>
            </div>
            <h2 className="text-center text-xl font-semibold tracking-widest text-gray-600 mb-4">
              CLEAN<span className="font-bold text-gray-800">SERVICE</span>
            </h2>
            <hr className="border-t border-gray-300 mb-6" />
            <div className="text-center">
              <p className="font-semibold text-gray-800">Serving You Since</p>
              <p className="mt-2 text-6xl font-extrabold text-gray-900">1980</p>
            </div>
          </div>
        </div>

        {/* Right side with awards timeline */}
        <div className="flex-1 flex flex-col justify-center">
          <p className="uppercase text-sm text-gray-400 tracking-widest mb-2">
            OUR AWARDS
          </p>
          <h1 className="text-3xl font-semibold mb-8">
            Our Winning <strong>Awards</strong>
          </h1>

          {/* Timeline */}
          <div className="relative pl-8 border-l border-gray-300 space-y-10">
            {/* Up arrow */}
            <div className="absolute left-[-16px] top-0">
              <button className="bg-gray-300 rounded-full p-2 text-gray-600 hover:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              </button>
            </div>

            {/* Award 1 */}
            <div className="relative">
              <h3 className="font-semibold text-gray-800">
                1st Place for Innovative Cleaning Solutions - 2018
              </h3>
              <p className="text-sm text-gray-600 mt-1 max-w-md">
                Recognized for pioneering eco-friendly cleaning techniques that set industry standards.
              </p>
            </div>

            {/* Award 2 */}
            <div className="relative">
              <h3 className="font-semibold text-gray-800">
                Best Customer Service Excellence Award - 2020
              </h3>
              <p className="text-sm text-gray-600 mt-1 max-w-md">
                Honored for outstanding customer satisfaction and commitment to quality.
              </p>
            </div>

            {/* Award 3 */}
            <div className="relative">
              <h3 className="font-semibold text-gray-800">
                International Cleaning Innovation Award - 2022
              </h3>
              <p className="text-sm text-gray-600 mt-1 max-w-md">
                Celebrated globally for developing state-of-the-art cleaning technologies.
              </p>
            </div>

            {/* Down arrow */}
            <div className="absolute left-[-16px] bottom-0">
              <button className="bg-gray-300 rounded-full p-2 text-gray-600 hover:bg-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
