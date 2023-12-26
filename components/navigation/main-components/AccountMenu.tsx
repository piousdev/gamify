import React from "react";
import {AccountMenuProps} from "@/index";
import Image from "next/image";
import MaleProfile from "@/public/assets/images/maleProfile.png";
import {signOut} from "next-auth/react";

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {
    if (!visible) return null;
    return (
        <div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
            <div className='flex flex-col gap-3'>
                <div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
                    <Image src={MaleProfile} alt={'Profile Avatar'} width={40} height={40} className='rounded-md' />
                    <p className='text-white text-sm group-hover/item:underline'>Username</p>
                </div>
                <hr className='bg-gray-600 border-0 h-px my-4' />
                <div onClick={() => signOut()} className='text-white px-3 text-center text-sm hover:underline'>
                    Sign Out of Gamify
                </div>
            </div>
        </div>
    )
}

export default AccountMenu;