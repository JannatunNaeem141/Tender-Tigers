import Image from 'next/image';
import React from 'react';
import Logo from '../public/Logos/logo.png';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import BlueEffect from '../public/blue-effect.png';

export default function Footer() {
    return (
        <div className='relative overflow-hidden'>
            <Image src={BlueEffect} alt='' className='absolute lg:-bottom-[19rem] md:-bottom-[21rem] -bottom-[9rem] lg:-left-72 md:-left-64 -left-28 -z-10' width={900} />
            <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 py-12 z-10'>
                <div className='w-full lg:flex grid grid-cols-1 lg:gap-24 md:gap-8 gap-10'>
                    <div className='lg:w-[45%] w-full'>
                        <div className='flex flex-col'>
                            <Link href='/'><Image src={Logo} width={100} height={100} alt='Logo' className='mb-5' /></Link>
                            <p className='text-[#B5B2E5] text-base lg:w-full md:w-4/5 w-full mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v</p>
                            <div className='lg:mb-0 md:mb-8 mb-5'>
                                <h3 className='text-[#FDBE44] font-semibold text-base uppercase mb-6'>STAY CONNECTED</h3>
                                <div className='flex items-center gap-3'>
                                    <Link href='#' target='_blank' className='group border border-blue-900 border-opacity-70 hover:border-[#1bf1b13f] transition-all p-5 rounded-lg relative flex items-center justify-center'>
                                        <FaFacebookF className='text-[#989CBE] group-hover:text-[#1BF1B1] transition-all text-lg group-hover:text-xl absolute' />
                                    </Link>
                                    <Link href='#' target='_blank' className='group border border-blue-900 border-opacity-70 hover:border-[#1bf1b13f] transition-all p-5 rounded-lg relative flex items-center justify-center'>
                                        <FaTwitter className='text-[#989CBE] group-hover:text-[#1BF1B1] transition-all text-lg group-hover:text-xl absolute' />
                                    </Link>
                                    <Link href='#' target='_blank' className='group border border-blue-900 border-opacity-70 hover:border-[#1bf1b13f] transition-all p-5 rounded-lg relative flex items-center justify-center'>
                                        <FaInstagram className='text-[#989CBE] group-hover:text-[#1BF1B1] transition-all text-lg group-hover:text-xl absolute' />
                                    </Link>
                                    <Link href='#' target='_blank' className='group border border-blue-900 border-opacity-70 hover:border-[#1bf1b13f] transition-all p-5 rounded-lg relative flex items-center justify-center'>
                                        <FaLinkedinIn className='text-[#989CBE] group-hover:text-[#1BF1B1] transition-all text-lg group-hover:text-xl absolute' />
                                    </Link>
                                    <Link href='#' target='_blank' className='group border border-blue-900 border-opacity-70 hover:border-[#1bf1b13f] transition-all p-5 rounded-lg relative flex items-center justify-center'>
                                        <FaYoutube className='text-[#989CBE] group-hover:text-[#1BF1B1] transition-all text-lg group-hover:text-xl absolute' />
                                    </Link>
                                </div>
                            </div>
                            <p className='text-white text-sm lg:mt-12 md:mt-5 mt-12 lg:block hidden'>&copy; 2023 Tender Tigers. All Right Reserved </p>
                        </div>
                    </div>
                    <div className='lg:w-[55%] w-full'>
                        <div className='grid md:grid-cols-3 grid-cols-2 md:gap-8 gap-10'>
                            <ul className='flex flex-col gap-3'>
                                <h3 className='text-white font-semibold text-xl md:mb-8 mb-4'>Marketplace</h3>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Explore</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Articles</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>How It Works</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Help</Link></li>
                            </ul>
                            <ul className='flex flex-col gap-3'>
                                <h3 className='text-white font-semibold text-xl md:mb-8 mb-4'>Links</h3>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Tokens</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>API</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Big Bounty</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Become Partners</Link></li>
                            </ul>
                            <ul className='flex flex-col md:gap-6 gap-3'>
                                <h3 className='text-white font-semibold text-xl md:mb-8 mb-4'>Others</h3>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Tokens</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>API</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Big Bounty</Link></li>
                                <li><Link href='#' className='text-[#E0E0E0] hover:text-[#1BF1B1] transition-all text-base'>Become Partners</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='text-white text-sm mt-16 lg:hidden block text-center'>&copy; 2023 Tender Tigers. All Right Reserved </p>
            </div>
        </div>
    )
}
