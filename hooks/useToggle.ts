'use client';
import {useCallback, useState} from "react";

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
    const [value, setValue] = useState(initialValue);
    const toggle = useCallback(() => setValue(value => !value), []);
    return [value, toggle];
};

export default useToggle;