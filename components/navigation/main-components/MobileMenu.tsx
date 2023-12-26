import React from "react";
import {MobileMenuProps} from "@/index";
import {items} from "@/components/navigation/sub-components/NavbarItemLists";

const MobileMenu: React.FC<MobileMenuProps> = ({visible}) => {
    if (!visible) return null;

    return (
        <div className='bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
            <div className='flex flex-col gap-4 cursor-pointer'>
                {items.map((item, index) => (
                    <div key={index} className='px-3 text-white text-sm text-center hover:underline'>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileMenu;