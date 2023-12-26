import React from "react";
import {MobileMenuProps} from "@/index";

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if (!visible) return null;

    return (
        <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
            <div className='flex flex-col gap-4 cursor-pointer'>
                <div className='px-3 text-center text-white hover:underline'>Home</div>
                <div className='px-3 text-center text-white hover:underline'>Store</div>
                <div className='px-3 text-center text-white hover:underline'>Community</div>
                <div className='px-3 text-center text-white hover:underline'>About</div>
                <div className='px-3 text-center text-white hover:underline'>Support</div>
            </div>
        </div>
    )
}

export default MobileMenu;