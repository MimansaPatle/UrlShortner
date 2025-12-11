"use client"
import React from 'react'
import localFont from "next/font/local";
import Link from 'next/link';
import { usePathname } from "next/navigation";

const poppins = localFont({
    src: "../app/fonts/Poppins-ExtraBold.ttf",               //popinssss
    variable: "--font-poppins",
    weight: "100, 900",
});


const Navbar = () => {
  
    const pathname = usePathname()
     const showNavbar = ["/homek", "/about", "/shorten"].includes(pathname)

    return (
        showNavbar && (
            <nav className='bg-gray-100 md:w-[80vw] flex justify-center md:justify-between fixed top-10 right-[3vw] md:right-[10vw] rounded-full w-[90vw] p-1 md:p-5 px-7 pr-3'>
                <div className='logo flex gap-3 md:gap-20 items-center'>
                    <div className='flex gap-2 items-center'>
                        <Link href="/">
                            <div className={`text-xl ml-7 md:text-3xl text-gray-900 font-bold ${poppins.className}`}>URL Shortner</div>
                        </Link>
                        <img src='hyperlink.png' alt='logo' className='h-7 w-7 md:visible invisible' />
                    </div>

                    <div className='md:justify-center flex'>
                        <ul className='flex gap-15 px-40 '>
                            <Link href="/"><li className='active hover:font-bold text-[18px]'>Home</li></Link>
                            <Link href="/shorten"><li className='active hover:font-bold text-[18px]'>Shorten</li></Link>
                            <Link href="/about"><li className='active hover:font-bold text-[18px]'>About</li></Link>
                        </ul>
                    </div>
                </div>
                {/* <div className='flex gap-4 text-white'>
                    <Link href="/shorten"><button className='cursor-pointer md:visible invisible bg-gray-800 rounded-full p-3 hover:bg-gray-950'>Get Started</button></Link>
                    <Link href="/github"><button className='bg-gray-800 rounded-full p-3 hover:bg-gray-950'>Github</button></Link>
                </div> */}
                <div className='hidden md:flex gap-4 text-white items-center'>
                <Link href="/registration">
                    <button className='cursor-pointer bg-gray-800 rounded-full py-3 px-5 hover:bg-gray-950'>Get Started</button>
                </Link>
            </div>
            </nav>
        )
    )
}

export default Navbar