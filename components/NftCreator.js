import Image from 'next/image';
import React from 'react';
import CreatorCardIcon1 from '../public/icons/icon-1.png';
import CreatorCardIcon2 from '../public/icons/icon-2.png';
import CreatorCardIcon3 from '../public/icons/icon-3.png';

export default function NftCreator() {
    return (
        <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 nftCreatorCSS mt-12 mb-20 widthStyle'>
            <div className='lg:py-14 md:py-10 py-8 px-5'>
                <h1 className='lg:text-4xl md:text-3xl text-3xl text-white text-center font-semibold'>How to Become <span className='text-[#1BF1B1]'>NFT Creator</span></h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-6 gap-12 lg:mt-24 md:mt-14 mt-16 mb-5'>
                    <div className='flex flex-col text-center items-center lg:gap-5 md:gap-3 gap-3'>
                        <Image src={CreatorCardIcon1} width={80} alt='Card Icon' />
                        <h3 className='text-white lg:text-2xl md:text-lg text-lg font-semibold'>Connect Your Wallet</h3>
                        <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v</p>
                    </div>
                    <div className='flex flex-col text-center items-center lg:gap-5 md:gap-3 gap-3'>
                        <Image src={CreatorCardIcon2} width={80} alt='Card Icon' />
                        <h3 className='text-white lg:text-2xl md:text-lg text-lg font-semibold'>Create Artwork</h3>
                        <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>
                    <div className='flex flex-col text-center items-center lg:gap-5 md:gap-3 gap-3 z-20'>
                        <Image src={CreatorCardIcon3} width={80} alt='Card Icon' />
                        <h3 className='text-white lg:text-2xl md:text-lg text-lg font-semibold'>Upload Your NFTs</h3>
                        <p className='text-white text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
