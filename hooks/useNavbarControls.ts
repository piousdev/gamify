import useScrollEffect from "@/hooks/useScrollEffect";
import useToggle from "@/hooks/useToggle";

const TOP_OFFSET = 66;

export const useNavbarControls = () => {
    const showBackground = useScrollEffect(TOP_OFFSET);
    const [showMobileMenu, toggleMobileMenu] = useToggle();
    const [showAccountMenu, toggleAccountMenu] = useToggle();

    return { showBackground, showMobileMenu, toggleMobileMenu, showAccountMenu, toggleAccountMenu };
};