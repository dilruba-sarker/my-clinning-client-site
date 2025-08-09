import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); 

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 2000));


      setFormData({
        name: "",
        email: "",
        country: "",
        phone: "",
        message: "",
      });

      setStatus("success");
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 mt-8 text-white relative">
        <div className="max-w-6xl mx-auto px-4 py-14 flex flex-col items-center ">
         <div className="flex flex-col items-center">
  <p className="text-xs tracking-widest mb-1 ">CONTACT US NOW</p>
  <h1 className="text-2xl font-bold">
    KEEP <span className="text-yellow-400">IN TOUCH</span>
  </h1>
</div>
          <nav className="flex space-x-4 text-xs mt-2 font-semibold">
            <a href="#" className="hover:underline">Home</a>
            <span>|</span>
            <a className="hover:underline">Contact Us</a>
          </nav>
        </div>
      </div>

      {/* Form Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
       <div className="flex flex-col items-center mb-6">
  <p className="text-xs tracking-widest mb-1">CONTACT US NOW</p>
  <h1 className="text-2xl font-bold">
    KEEP <span className="text-yellow-400 mb-4">IN TOUCH</span>
  </h1>
</div>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Your Country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm col-span-1 md:col-span-2 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <div className="text-center col-span-1 md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary text-white text-xs rounded px-5 py-2 shadow-lg hover:brightness-110 transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "SEND MAIL"}
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status === "success" && (
          <p className="text-green-600 text-center">✅ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">❌ Failed to send message. Try again.</p>
        )}
      </section>
    </div>
  );
}
