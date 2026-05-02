"use client";

import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {

    const userData = authClient.useSession();
      const user = userData.data?.user;

    return (
        <div>

             <Avatar
                              src={user?.image}
                              name={user?.name}
                              referrerPolicy="no-referrer"
                              size="sm"
                              className="cursor-pointer"
                            />

                             <span className="font-medium text-gray-700">{user?.name[0]}</span>

                             <h2>{user?.name}</h2>
                             <p>{user?.email}</p>
            
        </div>
    );
};

export default ProfilePage;