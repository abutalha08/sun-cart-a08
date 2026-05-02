"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sun, ShoppingCart, Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { toast } from "sonner";

const AppNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();

    toast.success("Logged out successfully 👋", {
      description: "You have been signed out",
    });

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

          {/*  LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-linear-to-br from-orange-400 to-pink-500 p-2.5 rounded-xl">
              <Sun className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-xl sm:text-2xl bg-linear-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
              SunCart
            </span>
          </Link>

          {/*  DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass("/")}>Home</Link>
            <Link href="/products" className={navLinkClass("/products")}>Products</Link>

            {user && (
              <Link href="/profile" className={navLinkClass("/profile")}>
                My Profile
              </Link>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 sm:gap-5">

            {/* CART */}
            <div className="relative cursor-pointer hidden sm:block ">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-500 transition" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>

            {/* AUTH BUTTONS (DESKTOP ONLY) */}
            {!user && (
              <div className="hidden md:flex items-center gap-3">
                <Link href="/login" className="text-orange-600 font-medium">
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="px-4 py-2 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg"
                >
                  Register
                </Link>
              </div>
            )}

            {/* USER */}
            {user && (
              <div className=" flex items-center  gap-2 sm:gap-3 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <Avatar
                  className="w-8 h-8 shrink-0"
                  src={user?.image}
                  name={user?.name}
                />

                <span className="font-medium text-gray-700 truncate max-w-[90px] sm:max-w-none">
                  {user?.name?.split(" ")[0]}
                </span>
                </div>

                <button
                  onClick={handleSignOut}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hidden sm:block cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}

            {/* MOBILE RIGHT SIDE AUTH */}
            {!user && (
              <div className="md:hidden flex items-center gap-2">
                <Link href="/login" className="text-orange-600 text-sm">
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-3 py-1.5 bg-orange-500 text-white rounded-lg text-sm"
                >
                  Register
                </Link>
              </div>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-orange-100 py-3 space-y-3">

            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={navLinkClass(item.path) + " block"}
              >
                {item.name}
              </Link>
            ))}

            {user && (
              <button
                onClick={handleSignOut}
                className="w-full text-left text-red-500 font-medium pt-2 cursor-pointer"
              >
                Logout
              </button>
            )}

          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;