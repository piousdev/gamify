import React from "react";
import { ChevronDown } from "lucide-react";
import { User } from '@prisma/client';
import SearchIcon from "@/components/navigation/main-components/SearchIcon";
import BellIcon from "@/components/navigation/main-components/BellIcon";
import ProfileImage from "@/components/navigation/main-components/ProfileImage";
import AccountMenu from "@/components/navigation/main-components/AccountMenu";

interface UserInteractionAreaProps {
    user: User | null;
    showAccountMenu: boolean;
    toggleAccountMenu: () => void;
}

const UserInteractionArea: React.FC<UserInteractionAreaProps> = ({
    user,
    showAccountMenu,
    toggleAccountMenu
}) => {
    return (
        <div className='flex flex-row ml-auto gap-7 items-center'>
            <SearchIcon />
            <BellIcon />
            <div
                onClick={toggleAccountMenu}
                className='flex flex-row items-center gap-2 cursor-pointer relative'
            >
                <ProfileImage user={user} />
                <ChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                <AccountMenu visible={showAccountMenu} />
            </div>
        </div>
    );
};

export default UserInteractionArea;
