'use client';
import React from "react";
import { useUser } from "@/context/UserContext";
import LogoComponent from "@/components/navigation/main-components/Logo";
import NavbarItemLists from "@/components/navigation/sub-components/NavbarItemLists";
import UserInteractionArea from "@/components/navigation/sub-components/UserInteractionArea";
import {useNavbarControls} from "@/hooks/useNavbarControls";
import MobileMenuTrigger from "@/components/navigation/sub-components/MobileMenuTrigger";

const Navbar = () => {
    const { user } = useUser();
    const {
        showBackground,
        showMobileMenu,
        toggleMobileMenu,
        showAccountMenu,
        toggleAccountMenu
    } = useNavbarControls();

    return (
        <nav className='w-full fixed z-40'>
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ""} `}>
                <LogoComponent/>
                <NavbarItemLists/>
                <MobileMenuTrigger
                    showMobileMenu={showMobileMenu}
                    toggleMobileMenu={toggleMobileMenu}
                />
                <UserInteractionArea
                    user={user}
                    showAccountMenu={showAccountMenu}
                    toggleAccountMenu={toggleAccountMenu}
                />
            </div>
        </nav>
    );
};

export default Navbar;