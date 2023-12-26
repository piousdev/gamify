'use client';

import React, {useCallback} from "react";
import Image from "next/image";
import {Bell, ChevronDown, Search} from "lucide-react";

import Logo from "../public/assets/logo/gamify-logo/logo-orange.png";

import NavbarItem from "@/components/NavbarItem";
import MobileMenu from "@/components/MobileMenu";


const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);
    // const toggleMobileMenu = useCallback(() => setShowMobileMenu(!showMobileMenu), [showMobileMenu]);
    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current)
    }, []);

  return (
      <nav className='w-full fixed z-40'>
        <div className='px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-zinc-900 bg-opacity-90'>
            <Image width={64} height={64} src={Logo} alt="Gamify Logo" />
            <div className='flex-row ml-8 gap-7 hidden lg:flex'>
                <NavbarItem label='Home'/>
                <NavbarItem label='Store'/>
                <NavbarItem label='Community'/>
                <NavbarItem label='About'/>
                <NavbarItem label='Support'/>
            </div>
            <div onClick={toggleMobileMenu} className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
                <p className='text-white text-sm'>Browse</p>
                <ChevronDown className='text-white transition' />
                <MobileMenu visible={showMobileMenu} />
            </div>
            <div className='flex flex-row ml-auto gap-7 items-center'>
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
                    <Search />
                </div>
                <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
                    <Bell />
                </div>
                <div className=''></div>
            </div>
        </div>
      </nav>
  )
}

export default Navbar;