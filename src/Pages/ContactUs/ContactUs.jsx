import React from "react";

export default function ContactUs() {
  return (
    <div>
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 text-white relative">
        <div className="max-w-6xl mx-auto px-4 py-14 flex flex-col items-center">
          <p className="text-xs tracking-widest mb-1">CONTACT US NOW</p>
          <h1 className="text-2xl font-bold">
            KEEP <span className="text-yellow-400">IN TOUCH</span>
          </h1>
          <nav className="flex space-x-4 text-xs mt-2 font-semibold">
            <a href="#" className="hover:underline">
              Home
            </a>
            <span>|</span>
            <a  className="hover:underline">
              Contact Us
            </a>
          </nav>
          {/* Mountains bottom right - approximate shape */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-0 w-40 h-32 bg-[url('/mnt/data/13e89c5f-3b0a-44a2-8374-d3126d3e7eb7.png')] bg-contain bg-no-repeat opacity-60 pointer-events-none"
          />
        </div>
      </div>

      {/* Form Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <p className="text-xs tracking-widest text-gray-500 mb-2">CONTACT US</p>
        <h2 className="text-xl font-semibold mb-6">
          Keep In Touch <strong>With ROAD CLEANING</strong>
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="text"
            placeholder="Your Country"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="border border-gray-300 rounded px-3 py-2 text-sm col-span-1 md:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </form>
        <div className="text-center">
          <button
            type="submit"
            className="bg-gradient-to-b from-yellow-400 to-yellow-600 text-white text-xs rounded px-5 py-2 shadow-lg hover:brightness-110 transition"
          >
            SEND MAIL
          </button>
        </div>
      </section>
    </div>
  );
}
