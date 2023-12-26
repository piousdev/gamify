import React from 'react';
import {Search} from "lucide-react";

const SearchIcon = () => {
    return (
        <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <Search />
        </div>
    );
};

export default SearchIcon;