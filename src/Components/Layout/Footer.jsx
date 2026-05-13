import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { IoCall, IoMail } from "react-icons/io5";
import { HiLocationMarker } from "react-icons/hi";
import logo from '../../assets/logomark.png'
import { NavLink } from "react-router";
const Footer = () => {
  const pages = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Portfolio",
      link: "/portfolio"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]
  const services = [
    {
      id: "publishing-services",
      name: "Publishing Services"
    },
    {
      id: "ghostwriting",
      name: "Ghostwriting"
    },
    {
      id: "book-cover-design",
      name: "Book Cover Design"
    },
    {
      id: "formatting-&-proofreading",
      name: "Formatting & Proofreading"
    },
    {
      id: "author-website-design",
      name: "Author Website Design"
    },
    {
      id: "book-editing",
      name: "Book Editing"
    },
    {
      id: "book-publishing",
      name: "Book Publishing"
    },
    {
      id: "book-trailer",
      name: "Book Trailer"
    }
  ]
  return (
    <footer className="bg-black pt-32 text-white rounded-t-2xl overflow-hidden">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="flex items-start">
            <div className="relative w-80 h-24">
              <img src={logo} alt="" />
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-[#CDC72A] font-semibold mb-5 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              {pages.map(
                (item, index) => (
                  <li key={index}>
                    <NavLink
                      to={item.link}
                      className="hover:text-[#CDC72A] transition duration-300"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
            {/* Social */}
            <div className="mt-8">
              <h4 className="text-[#CDC72A] font-semibold mb-4 text-sm uppercase tracking-wide">
                Follow Us
              </h4>

              <div className="flex items-center gap-3">
                {[FaFacebookF, FaInstagram, FaYoutube].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="/"
                      className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center hover:border-yellow-400 hover:text-yellow-400 transition duration-300"
                    >
                      <Icon size={14} />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#CDC72A] font-semibold mb-5 text-sm uppercase tracking-wide">
              Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <NavLink
                    to={`/services/${service.id}`}
                    className="hover:text-[#CDC72A] transition duration-300"
                  >
                    {service.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#CDC72A] font-semibold mb-5 text-sm uppercase tracking-wide">
              Contact
            </h3>

            <div className="space-y-5 text-sm text-gray-300">

              <div className="flex items-start gap-3">
                <IoCall className="text-[#CDC72A] mt-1" size={16} />
                <p>(855) 720-6237</p>
              </div>

              <div className="flex items-start gap-3">
                <IoMail className="text-[#CDC72A] mt-1" size={16} />
                <p>sales@pbwdesigns.com</p>
              </div>

              <div className="flex items-start gap-3">
                <HiLocationMarker
                  className="text-[#CDC72A] mt-1"
                  size={18}
                />
                <p>
                  2372 Morse Ave, 1st-2nd Fl
                  <br />
                  Ste 372B, IRVINE, CA 92614
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">

          <p>© All Rights Reserved 2026 - ProWebDesignUSA</p>

          <div className="flex items-center gap-5">
            <a
              href="/"
              className="hover:text-[#CDC72A] transition duration-300"
            >
              Terms Conditions
            </a>

            <a
              href="/"
              className="hover:text-[#CDC72A] transition duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="/"
              className="hover:text-[#CDC72A] transition duration-300"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;