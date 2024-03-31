"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SVGIcon from '@/components/SVGIcon';
import ShopCard from '../../../public/icons/shop_card';
import Search from '../../../public/icons/search';
import NavLinkItem from '@/components/NavLinkItem/NavLinkItem';
import Link from 'next/link';
import useToggle from '@/lib/hooks/useToggle';

const Navbar: React.FC = () => {
    const { bool, toggle } = useToggle();

    const navLinks: NavLink[] = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'About', path: '/about' },
        {
            id: 3,
            title: 'Services',
            path: '/services',
            dropdown: [
                { id: 1, title: 'Web Design', path: '/' },
                { id: 2, title: 'App Development', path: '/' },
                { id: 3, title: 'App Development', path: '/' },
                { id: 4, title: 'App Development', path: '/' },
                { id: 5, title: 'App Development', path: '/' },
            ],
        },
        {
            id: 4,
            title: 'Contact',
            path: '/contact',
            dropdown: [
                { id: 1, title: 'Web Design', path: '/' },
                { id: 2, title: 'App Development', path: '/' },
                { id: 3, title: 'App Development', path: '/' },
                { id: 4, title: 'App Development', path: '/' },
                { id: 5, title: 'App Development', path: '/' },
            ],
        },
        { id: 5, title: 'Contact', path: '/contact' },
        { id: 6, title: 'Contact', path: '/contact' },
        { id: 7, title: 'Contact', path: '/contact' },
        { id: 8, title: 'Contact', path: '/contact' },
        { id: 9, title: 'Contact', path: '/contact' },
        { id: 10, title: 'Contact', path: '/contact' },
        { id: 11, title: 'Contact', path: '/contact' },
    ];

    return (
        <header className="flex flex-wrap w-screen sm:justify-start sm:flex-nowrap z-50 text-sm py-0 dark:bg-gray-100">
            <nav className="w-full mx-auto " aria-label="Global">
                <div className='w-full flex flex-row-reverse items-center  dark:bg-gray-800' >
                    <div className="relative hidden sm:flex justify-center items-center w-40">
                        <SVGIcon
                            className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            style={{ width: "#ffffff", height: "28px" }}
                            svgProps={{
                                fill: "none",
                                viewBox: "0 0 24 24",
                                strokeWidth: "1.5",
                                stroke: "#ffffff",
                                'aria-hidden': "true",
                            }}
                        >
                            <ShopCard />
                        </SVGIcon>
                    </div>
                    <div className="relative py-2.5 grid-flow-row">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none ">
                            <SVGIcon
                                className="dark:text-gray-400"
                                svgProps={{
                                    viewBox: "0 0 20 20",
                                }}>
                                <Search />
                            </SVGIcon>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    <div className='w-full relative mt-3 justify-start flex text-right sm:flex'>
                        <Link className="flex-none text-xl sm:ml-20 font-semibold dark:text-white" href="/">Brand</Link>
                    </div>
                </div>
                <div className="relative sm:flex sm:items-center py-2.5">
                    <div className="flex items-center justify-between flex-col">
                        <div className="sm:hidden">
                            <button
                                type="button"
                                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-gray-950 dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={() => toggle()}
                                aria-controls="navbar-collapse-columns-1"
                                aria-label="Toggle navigation"
                            >
                                {bool ? <FaTimes size={24} color={"#1e293b"} /> : <FaBars size={24} color={"#1e293b"} />}
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-columns-1" className={`${bool ? 'block' : 'hidden'
                        } hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:flex sm:justify-center text-base p-2`}>
                        <div className="flex flex-col gap-5 mt-5 ml-5 sm:ml-0  sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:mt-0 ">
                            {navLinks.map(({ id, title, path, dropdown }) => (
                                <NavLinkItem key={id} title={title} path={path} dropdown={dropdown} id={id} />
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;



// themeProvider