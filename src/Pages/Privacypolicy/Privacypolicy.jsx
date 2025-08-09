




import React from "react";
import {
  Handshake,
  Glasses,
  Key,
  PhoneCall,
  PartyPopper,
  Lightbulb,
  Calendar,
  Users
} from "lucide-react";

const advantages = [
  { icon: <Handshake size={40} />, title: "Friendly Team", desc: "More Than 200 Teams" },
  { icon: <Glasses size={40} />, title: "Unique Scenario", desc: "We Thinking Out Of The Box" },
  { icon: <Key size={40} />, title: "Perfect Venues", desc: "Perfect Venues" },
  { icon: <PhoneCall size={40} />, title: "24/7 Hours Support", desc: "Anytime Anywhere" },
  { icon: <PartyPopper size={40} />, title: "Unforgettable Times", desc: "More Than 200 Teams" },
  { icon: <Lightbulb size={40} />, title: "Brilliant Idea", desc: "We Thinking Out Of The Box" },
  { icon: <Calendar size={40} />, title: "Unique Scenario", desc: "Perfect Venues" },
  { icon: <Users size={40} />, title: "Best Management", desc: "Anytime Anywhere" }
];

export default function Privacypolicy() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase tracking-widest text-sm text-gray-500">Why Choose Us</p>
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Service <span className="text-black font-extrabold">Advantages</span>
        </h2>
        <button className="mt-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all">
          Meet the Team
        </button>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((item, index) => (
          <div
            key={index}
            className="bg-white text-center p-8 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex justify-center text-orange-500 mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold text-blue-800">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

