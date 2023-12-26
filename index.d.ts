import {User} from "@prisma/client";
import React from "react";

export interface NavbarItemProps {
    label: string;
}

export interface MobileMenuProps {
    visible?: boolean;
}

export interface AccountMenuProps {
    visible?: boolean;
}

export interface UserContextProps {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}