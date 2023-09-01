import Image from 'next/image';
import React from 'react';
import BrandLogo1 from '../public/Logos/brand-logo-1.png';
import BrandLogo2 from '../public/Logos/brand-logo-2.png';
import BrandLogo3 from '../public/Logos/brand-logo-3.png';
import BrandLogo4 from '../public/Logos/brand-logo-4.png';
import BrandLogo5 from '../public/Logos/brand-logo-5.png';

export default function Brands() {
    return (
        <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 md:px-8 px-5 brandsBgCSS md:py-16 py-10 -mt-14'>
            <div className='lg:flex lg:justify-around lg:gap-4 md:gap-6 gap-8 grid md:grid-cols-3 grid-cols-2'>
                <Image src={BrandLogo1} className='md:h-[43px] h-[35px]' alt='Brand Logo' />
                <Image src={BrandLogo2} className='md:h-[43px] h-[35px]' alt='Brand Logo' />
                <Image src={BrandLogo3} className='md:h-[43px] h-[35px]' alt='Brand Logo' />
                <Image src={BrandLogo4} className='md:h-[43px] h-[35px]' alt='Brand Logo' />
                <Image src={BrandLogo5} className='md:h-[43px] h-[35px]' alt='Brand Logo' />
            </div>
        </div>
    )
}
