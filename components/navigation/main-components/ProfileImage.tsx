import React from 'react';
import Image from 'next/image';
import MaleProfile from '@/public/assets/images/maleProfile.png';
import FemaleProfile from '@/public/assets/images/femaleProfile.png';
import { User } from '@prisma/client';

interface ProfileImageProps {
    user: User | null;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ user }) => {
    const profileImage = user?.gender?.toString() === 'FEMALE' ? FemaleProfile : MaleProfile;

    return (
        <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
            <Image
                src={profileImage}
                alt="Profile"
                width={40}
                height={40}
            />
        </div>
    );
};

export default ProfileImage;