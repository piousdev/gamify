'use client';

import {useEffect, useState} from "react";

const useScrollEffect = (offset: number): boolean => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY >= offset);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    return show;
};

export default useScrollEffect;