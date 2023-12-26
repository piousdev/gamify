import React from 'react';
import Image from 'next/image';
import Logo from '@/public/assets/logo/gamify-logo/logo-orange.png';

const LogoComponent = () => {
    return <Image
        src={Logo}
        alt={"Gamify Logo"}
        width={64}
        height={64}
    />;
};

export default LogoComponent;