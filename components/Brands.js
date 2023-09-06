import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrandLogo1 from '../public/Logos/brand-logo-1.png';
import BrandLogo2 from '../public/Logos/brand-logo-2.png';
import BrandLogo3 from '../public/Logos/brand-logo-3.png';
import BrandLogo4 from '../public/Logos/brand-logo-4.png';
import BrandLogo5 from '../public/Logos/brand-logo-5.png';

export default function Brands() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 md:px-8 px-5 brandsBgCSS md:py-16 py-10 -mt-14 text-white'>
            <Slider {...settings} >
                <span className='!focus-visible:border-none !focus-visible:border-transparent'>
                    <Image src={BrandLogo1} className='md:h-[43px] h-[35px] mx-auto' alt='Brand Logo' />
                </span>
                <div>
                    <Image src={BrandLogo2} className='md:h-[43px] h-[35px] mx-auto' alt='Brand Logo' />
                </div>
                <div>
                    <Image src={BrandLogo3} className='md:h-[43px] h-[35px] mx-auto' alt='Brand Logo' />
                </div>
                <div>
                    <Image src={BrandLogo4} className='md:h-[43px] h-[35px] mx-auto' alt='Brand Logo' />
                </div>
                <div>
                    <Image src={BrandLogo5} className='md:h-[43px] h-[35px] mx-auto' alt='Brand Logo' />
                </div>
            </Slider>
        </div>
    )
}
