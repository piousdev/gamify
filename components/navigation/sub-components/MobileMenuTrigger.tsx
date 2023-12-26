import React from "react";
import { ChevronDown } from "lucide-react";
import MobileMenu from "@/components/navigation/main-components/MobileMenu";

interface MobileMenuTriggerProps {
    showMobileMenu: boolean;
    toggleMobileMenu: () => void;
}

const MobileMenuTrigger: React.FC<MobileMenuTriggerProps> = ({
    showMobileMenu,
    toggleMobileMenu
}) => {
    return (
        <div
            onClick={toggleMobileMenu}
            className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'>
            <p className='text-white text-sm'>Browse</p>
            <ChevronDown className={`text-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
            <MobileMenu visible={showMobileMenu} />
        </div>
    );
};

export default MobileMenuTrigger;