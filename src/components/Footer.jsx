

import { Mail, MapPin, Phone, Sun } from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-orange-50 via-pink-50 to-orange-50 border-t border-orange-100">

      {/* main container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* brand section */}
          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <div className="bg-linear-to-br from-orange-400 to-pink-500 p-2 rounded-xl shadow-md">
                <Sun className="w-6 h-6 text-white" />
              </div>

              <span className="text-xl font-bold bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                SunCart
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Your one-stop shop for all summer essentials. Quality products
              for unforgettable summer moments.
            </p>
          </div>

          {/* quick links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Products
                </Link>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>

            <ul className="space-y-3 text-sm sm:text-base">

              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 text-orange-500" />
                support@suncart.com
              </li>

              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 text-orange-500" />
                +880-123-45678
              </li>

              <li className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-orange-500" />
                Dhaka, Bangladesh
              </li>

            </ul>
          </div>

          {/* social */}
          <div>

            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>

            <div className="flex gap-3">

              <a
                href="#"
                className="p-2.5 bg-white rounded-lg border border-orange-200 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <LuFacebook className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="p-2.5 bg-white rounded-lg border border-pink-200 hover:bg-linear-to-r from-orange-500 to-pink-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="w-5 h-5" />
              </a>

              <a
                href="#"
                className="p-2.5 bg-white rounded-lg border border-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter className="w-5 h-5" />
              </a>

            </div>

            <div className="mt-5">
              <a
                href="#privacy"
                className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </a>
            </div>

          </div>
        {/* </div> */}

        {/* bottom section */}
        <div className="border-t border-orange-200 mt-10 pt-6 text-center text-gray-600 text-sm sm:text-base">
          <p>
            © 2026 SunCart. All rights reserved. Made with ❤️ for summer lovers.
          </p>
        </div>

      </div>
    </footer>
  );
}