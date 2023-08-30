import Image from 'next/image';
import React from 'react';
import BannerImg from '../public/Home/home-banner-img.png';

export default function Banner() {
    return (
        <div className='banner-bg-img bg-center bg-no-repeat bg-cover'>
            <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8'>
                <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-12 py-24 lg:min-h-screen md:min-h-[80vh] min-h-screen'>
                    <div className='flex flex-col justify-center lg:gap-14 md:gap-10 gap-8'>
                        <h1 className='common-header-gradient lg:text-5xl md:text-4xl text-3xl font-bold lg:w-4/5 w-full'>Mint, sell, and trade NFTs at scale.</h1>
                        <p className='text-base text-[#939FD3] lg:w-4/5 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde inventore similique officia voluptas, facilis temporibus</p>
                        <div className='flex items-center gap-5'>
                            <button className='uppercase lg:text-lg md:text-base text-xs font-medium text-white bg-[#5721CB] hover:bg-transparent transition-all border border-[#5721CB] rounded-full lg:py-2.5 py-2 lg:px-10 md:px-8 px-5'>Explore</button>
                            <button className='uppercase lg:text-lg md:text-base text-xs font-medium text-white hover:text-[#0E102B] hover:bg-[#1BF1B1] bg-transparent transition-all border border-[#1BF1B1] rounded-full lg:py-2.5 py-2 lg:px-10 md:px-8 px-5'>Create</button>
                        </div>
                        <div className='flex items-center gap-12'>
                            <div className='flex flex-col md:gap-2 gap-1'>
                                <p className='text-white text-base'>Collections</p>
                                <h1 className='font-bold text-[#FDBE44] lg:text-4xl md:text-3xl text-2xl uppercase'>285k+</h1>
                            </div>
                            <div className='flex flex-col md:gap-2 gap-1'>
                                <p className='text-white text-base'>Community</p>
                                <h1 className='font-bold text-[#C0E000] lg:text-4xl md:text-3xl text-2xl uppercase'>500k+</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-full'>
                        <Image src={BannerImg} width={1000} height={1000} />
                    </div>
                </div>
            </div>
        </div>
    )
}
