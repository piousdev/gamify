import React from 'react';
import NavbarItem from '@/components/navigation/main-components/NavbarItem';

export const items = ["Gamify", "Community", "Developer", "Admin", "Help"];
const NavbarItemLists = () => {
    return (
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
            {items.map((item, index) => (
                <NavbarItem key={index} label={item} />
            ))}
        </div>
    );
};

export default NavbarItemLists;