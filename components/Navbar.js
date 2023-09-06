// import Link from 'next/link';
// import React, { useState } from 'react';
// import { HiMenu } from 'react-icons/hi';
// import { AiOutlineClose } from 'react-icons/ai';
// import Logo from '../public/Logos/logo.png';
// import Image from 'next/image';
// import { FaDiscord, FaTwitter } from 'react-icons/fa';
// import WIcon from '../public/icons/w-icon.png';

// export default function Navbar() {
//     const [open, setOpen] = useState(false);
//     return (
//         <nav className={`absolute z-10 top-0 w-full py-1.5 ${open ? 'bg-[#0E102B]' : 'bg-transparent'}`}>
//             <div className="justify-between px-4 lg:mx-auto md:mx-5 mx-0 lg:max-w-7xl lg:items-center lg:flex lg:px-8">
//                 <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
//                     <Link href='/'><Image src={Logo} width={100} height={100} alt='Logo' /></Link>
//                     <div className="lg:hidden flex items-center gap-3">
//                         {/* Hamburger toggle button */}
//                         <button className="p-2 text-gray-700 rounded-md outline-none" onClick={() => setOpen(!open)} >
//                             {open ? (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-6 h-6 dark:text-white"
//                                     viewBox="0 0 20 20"
//                                     fill="currentColor"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             ) : (
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-6 h-6 dark:text-white"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                     strokeWidth={2}
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         d="M4 6h16M4 12h16M4 18h16"
//                                     />
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//                 </div>
//                 <div>
//                     <div className={`lg:flex lg:items-center lg:justify-between lg:pb-0 pb-12 absolute lg:static lg:bg-transparent bg-[#0E102B] lg:z-auto -z-10 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
//                         <nav className="lg:flex grid grid-cols-1 items-center justify-center lg:gap-5 gap-5 lg:pt-0 pt-8">
//                             <Link href='/' className='text-white hover:text-[#1BF1B1] duration-500 font-medium'>Home</Link>
//                             <Link href='#' className='text-white hover:text-[#1BF1B1] duration-500 font-medium'>Marketplace</Link>
//                             <Link href='#' className='text-white hover:text-[#1BF1B1] duration-500 font-medium'>Collection</Link>
//                             <Link href='#' className='text-white hover:text-[#1BF1B1] duration-500 font-medium'>Community</Link>
//                             <Link href='#' className='text-white hover:text-[#1BF1B1] duration-500 font-medium'>Create</Link>
//                         </nav>

//                         <div className="mt-8 lg:hidden inline-block">
//                             <ul className='flex items-center gap-4'>
//                                 {/* <Link href='#' className='p-2 border border-[#5C1FDF] bg-[#5C1FDF] hover:bg-transparent duration-500 rounded-full'><FaDiscord className='text-white text-lg' /></Link> */}
//                                 {/* <Link href='#' className='p-2 border border-[#5C1FDF] bg-[#5C1FDF] hover:bg-transparent duration-500 rounded-full'><FaTwitter className='text-white text-lg' /></Link> */}
//                                 <Link href='#' className='text-white bg-[#5C1FDF] hover:bg-transparent duration-500 border border-[#5C1FDF] rounded-full py-2 px-8 font-medium flex items-center gap-2'><Image src={WIcon} alt='W-Icon' />Connect Wallet</Link>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='flex items-center lg:gap-5 gap-5'>
//                     <div className="space-x-2 lg:inline-block hidden">
//                         <ul className='flex items-center gap-4'>
//                             {/* <Link href='#' className='p-3 border border-[#5C1FDF] bg-[#5C1FDF] hover:bg-transparent duration-500 rounded-full'><FaDiscord className='text-white text-lg' /></Link> */}
//                             {/* <Link href='#' className='p-3 border border-[#5C1FDF] bg-[#5C1FDF] hover:bg-transparent duration-500 rounded-full'><FaTwitter className='text-white text-lg' /></Link> */}
//                             <Link href='#' className='text-white bg-[#5C1FDF] hover:bg-transparent duration-500 border border-[#5C1FDF] rounded-full py-3 px-10 font-medium  flex items-center gap-2'><Image src={WIcon} alt='W-Icon' />Connect Wallet</Link>
//                         </ul>
//                     </div>
//                 </div>

//             </div>
//         </nav>
//     )
// }

import React from "react";
import Logo from '../public/Logos/logo.png';
import { Header, Container, Group, Burger, Transition, Divider, Box, Button } from "@mantine/core";
import { useDisclosure, useHeadroom, useWindowScroll } from "@mantine/hooks";
import Link from "next/link";
import Image from "next/image";
// import { links } from "../data/NavbarData";
import WIcon from '../public/icons/w-icon.png';

const HeaderView = () => {
    const [opened, { toggle }] = useDisclosure(false);

    return (
        <Header height={110} px="md" className={`z-50 py-3 px-0 absolute w-full top-0 -translate-y-0 border-none ${opened ? 'bg-[#0E102B]' : 'bg-transparent'}`} >
            <Container className="flex justify-between items-center h-full lg:px-12" size="xl">
                <Box>
                    <Link href="/" className="flex justify-start items-center">
                        <Image src={Logo} width={100} height={100} alt='Logo' />
                    </Link>
                </Box>

                <Group spacing={0} className="hidden md:flex items-center lg:gap-8 md:gap-4">
                    <Link href="/" target="_blank" rel="noreferrer" className='font-semibold transition-all duration-300 text-white hover:text-[#1BF1B1]'>Home</Link>
                    <Link href="#" target="_blank" rel="noreferrer" className='font-semibold transition-all duration-300 text-white hover:text-[#1BF1B1]'>Marketplace</Link>
                    <Link href="#" target="_blank" rel="noreferrer" className='font-semibold transition-all duration-300 text-white hover:text-[#1BF1B1]'>Collection</Link>
                    <Link href="#" target="_blank" rel="noreferrer" className='font-semibold transition-all duration-300 text-white hover:text-[#1BF1B1]'>Community</Link>
                    <Link href="#" target="_blank" rel="noreferrer" className='font-semibold transition-all duration-300 text-white hover:text-[#1BF1B1]'>Create</Link>
                </Group>

                <Link href='#' className='text-white bg-[#5C1FDF] hover:bg-transparent duration-500 border border-[#5C1FDF] rounded-full lg:py-3 md:py-2 lg:px-8 px-5 font-medium hidden md:flex items-center gap-1'><Image src={WIcon} alt='W-Icon' />Connect Wallet</Link>

                <Burger
                    opened={opened}
                    onClick={toggle}
                    className="md:hidden"
                    color="#fff"
                    size="md"
                />
                {/* Phone */}
                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Box
                            className="absolute bg-[#0E102B] left-0 w-full z-10 overflow-hidden md:hidden rounded-none pb-5 overflow-y-auto"
                            top={110}
                            style={styles}
                        >
                            <Link href="/" target="_blank" rel="noreferrer" className={`block relative text-base md:text-sm 2xl:text-base font-semibold px-6 py-3 transition-all duration-300 text-white nav-item`} >
                                <span>Home</span>
                            </Link>
                            <Link href="#" target="_blank" rel="noreferrer" className={`block relative text-base md:text-sm 2xl:text-base font-semibold px-6 py-3 transition-all duration-300 text-white nav-item`} >
                                <span>Marketplace</span>
                            </Link>
                            <Link href="#" target="_blank" rel="noreferrer" className={`block relative text-base md:text-sm 2xl:text-base font-semibold px-6 py-3 transition-all duration-300 text-white nav-item`} >
                                <span>Collection</span>
                            </Link>
                            <Link href="#" target="_blank" rel="noreferrer" className={`block relative text-base md:text-sm 2xl:text-base font-semibold px-6 py-3 transition-all duration-300 text-white nav-item`} >
                                <span>Community</span>
                            </Link>
                            <Link href="#" target="_blank" rel="noreferrer" className={`block relative text-base md:text-sm 2xl:text-base font-semibold px-6 py-3 transition-all duration-300 text-white nav-item`} >
                                <span>Create</span>
                            </Link>

                            <Link href="" rel="noreferrer" target="_blank" className="mx-5">
                                <Button variant="white" fullWidth className='text-white bg-[#5C1FDF] hover:bg-transparent duration-500 border border-[#5C1FDF] rounded-full py-2 px-8 font-medium flex items-center justify-center'><Image src={WIcon} alt='W-Icon' className="mr-1" />Connect Wallet</Button>
                            </Link>
                        </Box>
                    )}
                </Transition>
            </Container>
        </Header>
    );
};

export default HeaderView;