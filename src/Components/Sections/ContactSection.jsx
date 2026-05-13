import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 px-1 md:px-4">
      <div className="w-full max-w-6xl -mb-52 mx-auto bg-linear-to-b from-[#1D2D2A] to-[#000000] rounded-xl border border-[#1f1f1f] overflow-hidden shadow-[0_0_40px_rgba(255,255,0,0.05)] relative">
        <div className="relative z-10 px-3 py-6 md:px-10 md:py-12">
          {/* Heading */}
          <div className="text-center mb-10">
            <h3 className="text-[#CDC72A] text-2xl sm:text-3xl font-bold leading-snug">
              Let's Get In Touch.
            </h3>
            <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              Your laboratory instruments should serve you, not the other way
              around. We're happy to help you.
            </p>
          </div>
          {/* Form */}
          <form className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-12 bg-[#f5f5f5] text-black rounded px-4 outline-none border border-transparent focus:border-[#CDC72A] transition duration-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full h-12 bg-[#f5f5f5] text-black rounded px-4 outline-none border border-transparent focus:border-[#CDC72A] transition duration-300"
              />
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <select
                className="w-full h-12 bg-[#f5f5f5] text-gray-600 rounded px-4 outline-none border border-transparent focus:border-[#CDC72A] transition duration-300"
              >
                <option>Select services</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>SEO Services</option>
                <option>Digital Marketing</option>
              </select>

              <input
                type="text"
                placeholder="Phone"
                className="w-full h-12 bg-[#f5f5f5] text-black rounded px-4 outline-none border border-transparent focus:border-[#CDC72A] transition duration-300"
              />
            </div>

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full bg-[#f5f5f5] text-black rounded p-4 outline-none border border-transparent focus:border-[#CDC72A] transition duration-300 resize-none"
            />

            {/* Bottom Text */}
            <p className="text-center text-gray-500 text-sm leading-relaxed">
              Your laboratory instruments should serve you, not the other way
              around. We're happy to help you.
            </p>

            {/* Button */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="w-full h-11 shadow-md sm:h-12 text-white cursor-pointer bg-[#CDC72A] hover:bg-transparent hover:text-[#CDC72A] hover:border-[1px] border-[#CDC72A] hover:shadow-[#CDC72A] font-semibold rounded-md transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;