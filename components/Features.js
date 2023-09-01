"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import FeatureBrand from '../public/Features/feature-brand-logo.png';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import { FaEthereum } from 'react-icons/fa';

const Features = () => {
    const [love, setLove] = useState(false);
    // console.log(love);
    return (
        <div className='FeaturesBgImages'>
            <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 py-14'>
                <h1 className='text-center common-header-gradient2 lg:text-4xl md:text-3xl text-3xl font-bold mb-12'>Trending Auctions</h1>

                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='common-card-css hover:border-[#5B1FDC] transition-all duration-500 p-3'>
                        <div className='card1-bg-image bg-cover bg-no-repeat bg-center h-44 rounded-2xl'></div>
                        <div className='flex items-center justify-between py-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={FeatureBrand} width={60} height={70} alt='Feature Brand logo' className='rounded-xl' />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-white font-medium text-base'>Monkey #555</h3>
                                    <p className='text-gray-400 text-sm'>By Admin</p>
                                </div>
                            </div>
                            <div className='border border-[#ffcbcf3d] rounded-full p-2 cursor-pointer' onClick={() => { setLove(!love) }}>
                                {love ?
                                    <HiHeart className='text-[#FF434E] text-lg' />
                                    :
                                    <HiOutlineHeart className='text-[#FF434E] text-lg ' />
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-[#5B40FF] rounded-full'>
                                    <FaEthereum className="text-xl text-white" />
                                </div>
                                <p className='text-base text-white font-semibold'>12.2 ETH</p>
                            </div>
                            <button className='border border-[#1BF1B1] hover:border-[#5721CB] hover:bg-[#5721CB] transition-all duration-500 rounded-full py-2 px-5 text-white text-sm'>Place a Bid</button>
                        </div>
                    </div>
                    <div className='common-card-css hover:border-[#5B1FDC] transition-all duration-500 p-3'>
                        <div className='card2-bg-image bg-cover bg-no-repeat bg-center h-44 rounded-2xl'></div>
                        <div className='flex items-center justify-between py-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={FeatureBrand} width={60} height={70} alt='Feature Brand logo' className='rounded-xl' />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-white font-medium text-base'>Monkey #555</h3>
                                    <p className='text-gray-400 text-sm'>By Admin</p>
                                </div>
                            </div>
                            <div className='border border-[#ffcbcf3d] rounded-full p-2 cursor-pointer' onClick={() => { setLove(!love) }}>
                                {love ?
                                    <HiHeart className='text-[#FF434E] text-lg' />
                                    :
                                    <HiOutlineHeart className='text-[#FF434E] text-lg ' />
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-[#5B40FF] rounded-full'>
                                    <FaEthereum className="text-xl text-white" />
                                </div>
                                <p className='text-base text-white font-semibold'>12.2 ETH</p>
                            </div>
                            <button className='border border-[#1BF1B1] hover:border-[#5721CB] hover:bg-[#5721CB] transition-all duration-500 rounded-full py-2 px-5 text-white text-sm'>Place a Bid</button>
                        </div>
                    </div>
                    <div className='common-card-css hover:border-[#5B1FDC] transition-all duration-500 p-3'>
                        <div className='card3-bg-image bg-cover bg-no-repeat bg-center h-44 rounded-2xl'></div>
                        <div className='flex items-center justify-between py-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={FeatureBrand} width={60} height={70} alt='Feature Brand logo' className='rounded-xl' />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-white font-medium text-base'>Monkey #555</h3>
                                    <p className='text-gray-400 text-sm'>By Admin</p>
                                </div>
                            </div>
                            <div className='border border-[#ffcbcf3d] rounded-full p-2 cursor-pointer' onClick={() => { setLove(!love) }}>
                                {love ?
                                    <HiHeart className='text-[#FF434E] text-lg' />
                                    :
                                    <HiOutlineHeart className='text-[#FF434E] text-lg ' />
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-[#5B40FF] rounded-full'>
                                    <FaEthereum className="text-xl text-white" />
                                </div>
                                <p className='text-base text-white font-semibold'>12.2 ETH</p>
                            </div>
                            <button className='border border-[#1BF1B1] hover:border-[#5721CB] hover:bg-[#5721CB] transition-all duration-500 rounded-full py-2 px-5 text-white text-sm'>Place a Bid</button>
                        </div>
                    </div>
                    <div className='common-card-css hover:border-[#5B1FDC] transition-all duration-500 p-3'>
                        <div className='card4-bg-image bg-cover bg-no-repeat bg-center h-44 rounded-2xl'></div>
                        <div className='flex items-center justify-between py-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={FeatureBrand} width={60} height={70} alt='Feature Brand logo' className='rounded-xl' />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-white font-medium text-base'>Monkey #555</h3>
                                    <p className='text-gray-400 text-sm'>By Admin</p>
                                </div>
                            </div>
                            <div className='border border-[#ffcbcf3d] rounded-full p-2 cursor-pointer' onClick={() => { setLove(!love) }}>
                                {love ?
                                    <HiHeart className='text-[#FF434E] text-lg' />
                                    :
                                    <HiOutlineHeart className='text-[#FF434E] text-lg ' />
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-[#5B40FF] rounded-full'>
                                    <FaEthereum className="text-xl text-white" />
                                </div>
                                <p className='text-base text-white font-semibold'>12.2 ETH</p>
                            </div>
                            <button className='border border-[#1BF1B1] hover:border-[#5721CB] hover:bg-[#5721CB] transition-all duration-500 rounded-full py-2 px-5 text-white text-sm'>Place a Bid</button>
                        </div>
                    </div>
                    <div className='common-card-css hover:border-[#5B1FDC] transition-all duration-500 p-3'>
                        <div className='card5-bg-image bg-cover bg-no-repeat bg-center h-44 rounded-2xl'></div>
                        <div className='flex items-center justify-between py-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={FeatureBrand} width={60} height={70} alt='Feature Brand logo' className='rounded-xl' />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-white font-medium text-base'>Monkey #555</h3>
                                    <p className='text-gray-400 text-sm'>By Admin</p>
                                </div>
                            </div>
                            <div className='border border-[#ffcbcf3d] rounded-full p-2 cursor-pointer' onClick={() => { setLove(!love) }}>
                                {love ?
                                    <HiHeart className='text-[#FF434E] text-lg' />
                                    :
                                    <HiOutlineHeart className='text-[#FF434E] text-lg ' />
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-[#5B40FF] rounded-full'>
                                    <FaEthereum className="text-xl text-white" />
                                </div>
                                <p className='text-base text-white font-semibold'>12.2 ETH</p>
                            </div>
                            <button className='border border-[#1BF1B1] hover:border-[#5721CB] hover:bg-[#5721CB] transition-all duration-500 rounded-full py-2 px-5 text-white text-sm'>Place a Bid</button>
                        </div>
                    </div>
                    <div className='common-card-css hover:border-[#5B1FDC] transition-all duration-500 p-3'>
                        <div className='card6-bg-image bg-cover bg-no-repeat bg-center h-44 rounded-2xl'></div>
                        <div className='flex items-center justify-between py-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={FeatureBrand} width={60} height={70} alt='Feature Brand logo' className='rounded-xl' />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-white font-medium text-base'>Monkey #555</h3>
                                    <p className='text-gray-400 text-sm'>By Admin</p>
                                </div>
                            </div>
                            <div className='border border-[#ffcbcf3d] rounded-full p-2 cursor-pointer' onClick={() => { setLove(!love) }}>
                                {love ?
                                    <HiHeart className='text-[#FF434E] text-lg' />
                                    :
                                    <HiOutlineHeart className='text-[#FF434E] text-lg ' />
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-[#5B40FF] rounded-full'>
                                    <FaEthereum className="text-xl text-white" />
                                </div>
                                <p className='text-base text-white font-semibold'>12.2 ETH</p>
                            </div>
                            <button className='border border-[#1BF1B1] hover:border-[#5721CB] hover:bg-[#5721CB] transition-all duration-500 rounded-full py-2 px-5 text-white text-sm'>Place a Bid</button>
                        </div>
                    </div>
                    <div className='common-card-css hover:border-[#5B1FDC] transition-all duration-500 p-3'>
                        <div className='card3-bg-image bg-cover bg-no-repeat bg-center h-44 rounded-2xl'></div>
                        <div className='flex items-center justify-between py-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={FeatureBrand} width={60} height={70} alt='Feature Brand logo' className='rounded-xl' />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-white font-medium text-base'>Monkey #555</h3>
                                    <p className='text-gray-400 text-sm'>By Admin</p>
                                </div>
                            </div>
                            <div className='border border-[#ffcbcf3d] rounded-full p-2 cursor-pointer' onClick={() => { setLove(!love) }}>
                                {love ?
                                    <HiHeart className='text-[#FF434E] text-lg' />
                                    :
                                    <HiOutlineHeart className='text-[#FF434E] text-lg ' />
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-[#5B40FF] rounded-full'>
                                    <FaEthereum className="text-xl text-white" />
                                </div>
                                <p className='text-base text-white font-semibold'>12.2 ETH</p>
                            </div>
                            <button className='border border-[#1BF1B1] hover:border-[#5721CB] hover:bg-[#5721CB] transition-all duration-500 rounded-full py-2 px-5 text-white text-sm'>Place a Bid</button>
                        </div>
                    </div>
                    <div className='common-card-css hover:border-[#5B1FDC] transition-all duration-500 p-3'>
                        <div className='card7-bg-image bg-cover bg-no-repeat bg-center h-44 rounded-2xl'></div>
                        <div className='flex items-center justify-between py-8'>
                            <div className='flex items-center gap-3'>
                                <Image src={FeatureBrand} width={60} height={70} alt='Feature Brand logo' className='rounded-xl' />
                                <div className='flex flex-col gap-1'>
                                    <h3 className='text-white font-medium text-base'>Monkey #555</h3>
                                    <p className='text-gray-400 text-sm'>By Admin</p>
                                </div>
                            </div>
                            <div className='border border-[#ffcbcf3d] rounded-full p-2 cursor-pointer' onClick={() => { setLove(!love) }}>
                                {love ?
                                    <HiHeart className='text-[#FF434E] text-lg' />
                                    :
                                    <HiOutlineHeart className='text-[#FF434E] text-lg ' />
                                }
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-3'>
                                <div className='p-2 bg-[#5B40FF] rounded-full'>
                                    <FaEthereum className="text-xl text-white" />
                                </div>
                                <p className='text-base text-white font-semibold'>12.2 ETH</p>
                            </div>
                            <button className='border border-[#1BF1B1] hover:border-[#5721CB] hover:bg-[#5721CB] transition-all duration-500 rounded-full py-2 px-5 text-white text-sm'>Place a Bid</button>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-12'>
                    <button className='uppercase md:text-base text-xs font-medium text-white bg-[#5721CB] hover:bg-transparent duration-500 border border-[#5721CB] rounded-full lg:py-2.5 py-2 lg:px-10 md:px-8 px-5'>Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Features;