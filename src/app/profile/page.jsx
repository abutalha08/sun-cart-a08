"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import "animate.css";
import { Mail, UserCircle2 } from "lucide-react";
import { UpdateUserInformation } from "@/components/UpdateUserInformation";
import Image from "next/image";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-pink-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl animate__animated animate__fadeInUp">
        
        <div
          className="rounded-3xl overflow-hidden border border-orange-100
          bg-white shadow-2xl"
        >
          <div className="bg-linear-to-r from-orange-500 to-pink-500 px-6 sm:px-10 py-12 text-white text-center">
            <div className="flex justify-center mb-4">
  <div className="w-28 h-28 sm:w-32 sm:h-32 relative rounded-full ring-4 ring-white/40 shadow-2xl overflow-hidden">
    <Image
      src={user?.image || "/default-avatar.png"}
      alt={user?.name || "User"}
      fill
      className="object-cover"
      referrerPolicy="no-referrer"
    />
  </div>
</div>

            <h1 className="text-2xl sm:text-3xl font-bold">
              {user?.name || "User"}
            </h1>

            <p className="text-white/85 mt-2 text-sm sm:text-base">
              Welcome back to SunCart ✨
            </p>
          </div>

          <div className="p-6 sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              
            
              <div
                className="rounded-2xl border border-orange-100 bg-orange-50/60
                p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <UserCircle2 className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-gray-700">Full Name</span>
                </div>

                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  {user?.name || "Not available"}
                </h2>
              </div>

              <div
                className="rounded-2xl border border-pink-100 bg-pink-50/60
                p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 text-pink-500" />
                  <span className="font-semibold text-gray-700">Email</span>
                </div>

                <p className="text-base sm:text-lg font-medium text-gray-900 break-all">
                  {user?.email || "Not available"}
                </p>
              </div>
            </div>

            {/* Initial Badge */}
            <div className="mt-6 flex items-center gap-3">
              <span
                className="w-12 h-12 rounded-full bg-linear-to-r from-orange-500 to-pink-500
                text-white flex items-center justify-center text-lg font-bold shadow-lg"
              >
                {user?.name?.[0]?.toUpperCase() || "U"}
              </span>

              <span className="font-medium text-gray-600">
                Profile Initial
              </span>
            </div>

            {/* Update Button */}
            <div className="mt-8">
              <UpdateUserInformation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;