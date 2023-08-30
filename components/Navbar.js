import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../public/Logos/logo.png';
import Image from 'next/image';

export default function Navbar() {
    const Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICE", link: "/" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    const [open, setOpen] = useState(false);
    return (
        <div className='max-w-7xl mx-auto'>
            {/* <div className='shadow-md w-full fixed top-0 left-0'> */}
            <div className={`md:flex items-center justify-between ${open ? 'bg-white' : 'bg-transparent'} py-4 md:px-10 px-7`}>
                <Link href='/' className='font-bold text-2xl'><Image src={Logo} width={100} height={100} alt='Logo' /></Link>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ?
                        <AiOutlineClose className='' />
                        :
                        <HiMenu className='text-white' />
                    }
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:bg-transparent bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                    <button>Get Started</button>
                </ul>
            </div>
            {/* </div> */}
        </div>
    )
}
