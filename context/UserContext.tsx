'use client';
import React, {createContext, useContext, useState} from "react";
import {UserContextProps} from "@/index";
import {User} from "@prisma/client";

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider:React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};