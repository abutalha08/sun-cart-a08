"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, ShoppingCart, Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const AppNavbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  const navLinkClass = (path) =>
  pathname === path
    ? "text-orange-500 border-b-2 border-orange-500 pb-1 font-medium"
    : "text-gray-700 hover:text-orange-500 pb-1 font-medium";

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    ...(user ? [{ name: "My Profile", path: "/profile" }] : []),
    ...(!user
      ? [
          { name: "Login", path: "/login" },
          { name: "Register", path: "/signup" },
        ]
      : []),
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
              <span className="text-2xl font-bold bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                SunCart
              </span>
            </p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>

            <Link href="/products" className={navLinkClass("/products")}>
              Products
            </Link>

            {user && (
              <Link href="/profile" className={navLinkClass("/profile")}>
                My Profile
              </Link>
            )}
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

            {/* Not Logged In */}
            {!user && (
              <div className="hidden md:flex items-center gap-4">
                <Link href="/login" className="px-5 py-2.5 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors font-medium">
                  Login
                </Link>

                <Link href="/signup" className="px-5 py-2.5 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all font-medium" >
                  Register
                </Link>
              </div>
            )}

            {/* Logged In */}
            {user && (
              <div className="hidden md:flex items-center gap-3">
                <Avatar
                  src={user?.image}
                  name={user?.name}
                  referrerPolicy="no-referrer"
                  size="sm"
                  className="cursor-pointer"
                />

                <span className="font-medium text-gray-700">{user?.name[0]}</span>

                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
                >
                  Logout
                </button>
              </div>
            )}

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
              className={navLinkClass(item.path)}
            >
              {item.name}
            </Link>
          ))}

          {user && (
            <div className="border-t pt-4 mt-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Avatar src={user?.image} name={user?.name} size="sm" />
                <span className="font-medium text-gray-700">{user?.name[0]}</span>
              </div>

              <button
                onClick={handleSignOut}
                className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default AppNavbar;