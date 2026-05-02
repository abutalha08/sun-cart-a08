"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sun, ShoppingCart, Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const AppNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/");
  };

  const navLinkClass = (path) =>
    pathname === path
      ? "text-orange-500 border-b-2 border-orange-500 pb-1 font-medium"
      : "text-gray-700 hover:text-orange-500 pb-1 font-medium transition";

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    ...(user ? [{ name: "My Profile", path: "/profile" }] : []),
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-linear-to-br from-orange-400 to-pink-500 p-2.5 rounded-xl">
              <Sun className="text-white w-6 h-6" strokeWidth={2.5} />
            </div>

            <span className="font-bold text-2xl bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              SunCart
            </span>
          </Link>

          {/* DESKTOP MENU */}
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

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-5">

            {/* CART */}
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-500 transition" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                0
              </span>
            </div>

            {/* NOT LOGGED IN */}
            {!user && (
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-orange-600 hover:text-orange-700 font-medium transition"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-4 py-2 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition font-medium"
                >
                  Register
                </Link>
              </div>
            )}

            {/* LOGGED IN */}
            {user && (
              <div className="hidden md:flex items-center gap-3">

                {/* AVATAR SAFE */}
                <Avatar className="w-8 h-8 cursor-pointer">
                  <Avatar.Image
                    src={
                      user?.image ||
                      "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(user?.name || "User")
                    }
                    alt={user?.name || "User"}
                    referrerPolicy="no-referrer"
                  />

                  <Avatar.Fallback>
                    {user?.name?.[0]?.toUpperCase() || "U"}
                  </Avatar.Fallback>
                </Avatar>

                <span className="font-medium text-gray-700">
  {user?.name?.split(" ")[0] || "User"}
</span>

                {/* LOGOUT */}
                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition font-medium active:scale-95"
                >
                  Logout
                </button>
              </div>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
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

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white px-4 py-3 space-y-3">

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

          {!user ? (
            <div className="flex gap-4 pt-3">
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setIsMenuOpen(false)}
                className="text-orange-500 font-medium"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="flex justify-between items-center pt-3">

              <Avatar className="w-8 h-8">
                <Avatar.Image
                  src={
                    user?.image ||
                    "https://ui-avatars.com/api/?name=" +
                      encodeURIComponent(user?.name || "User")
                  }
                  alt={user?.name || "User"}
                />

                <Avatar.Fallback>
                  {user?.name?.[0]?.toUpperCase() || "U"}
                </Avatar.Fallback>
              </Avatar>

              <span className="font-medium text-gray-700">
  {user?.name?.split(" ")[0] || "User"}
</span>

              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
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