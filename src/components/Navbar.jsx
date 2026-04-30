"use client";
import React from "react";
import Link from "next/link";
import { Sun, ShoppingCart, Menu, X } from "lucide-react";

const AppNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-linear-to-br from-orange-400 to-pink-500 p-2.5 rounded-xl">
              <Sun className="text-white w-6 h-6" strokeWidth={2.5} />
            </div>

            <p className="font-bold text-2xl tracking-tight select-none">
              <span className="text-2xl font-bold bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">SunCart</span>
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Home
            </Link>

            <Link
              href="/products"
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
            >
              Products
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-5">

            {/* Cart */}
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-[#4A5568] hover:text-[#FF7A00] transition-colors" />
              <span className="absolute -top-2 -right-2 bg-[#FF7A00] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                0
              </span>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="px-5 py-2.5 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-5 py-2.5 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all font-medium"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4 pt-3 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-lg font-medium text-[#4A5568] hover:text-[#FF7A00] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default AppNavbar;