"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDown, IoMdSearch } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import { SlArrowDown } from 'react-icons/sl';

interface NavLink {
    id: number;
    title: string;
    path: string;
    dropdown?: DropdownItem[];
}

interface DropdownItem {
    id: number;
    title: string;
    path: string;
}

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    // Sample navigation links with optional dropdown items
    const navLinks: NavLink[] = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'About', path: '/about' },
        {
            id: 3,
            title: 'Services',
            path: '/services',
            dropdown: [
                { id: 1, title: 'Web Design', path: '/services/web-design' },
                { id: 2, title: 'App Development', path: '/services/app-development' },
                { id: 3, title: 'App Development', path: '/services/app-development' },
                { id: 4, title: 'App Development', path: '/services/app-development' },
                { id: 5, title: 'App Development', path: '/services/app-development' },
            ],
        },
        { id: 4, title: 'Contact', path: '/contact' },
    ];

    const toggleNav = (): void => setIsNavOpen(!isNavOpen);

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 sm:py-0 dark:bg-gray-800">
            <nav className="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8" aria-label="Global">
                <div className="relative sm:flex sm:items-center">
                    <div className="flex items-center justify-between">
                        <a className="flex-none text-xl font-semibold dark:text-white" href="#">Brand</a>
                        <div className="sm:hidden">
                            <button
                                type="button"
                                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                onClick={toggleNav}
                                aria-controls="navbar-collapse-columns-1"
                                aria-label="Toggle navigation"
                            >
                                {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                        </div>
                    </div>

                    <div id="navbar-collapse-columns-1" className={`${isNavOpen ? 'block' : 'hidden'
                        } hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
                        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0">
                            {navLinks.map(({ id, title, path, dropdown }) => (
                                <div key={id} className="hs-dropdown group">
                                    <button className="sm:py-3 flex items-center text-gray-600 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500">
                                        {title}
                                        {dropdown && <MdArrowDropDown style={{ color: "#a39e9e", }} /> }                                       
                                    </button>
                                    {dropdown && (
                                        <div className="hs-dropdown-menu hidden group-hover:block absolute bg-white shadow-md  rounded-sm overflow-hidden">
                                            {dropdown.map(({ id, title, path }) => (
                                                <a key={id} href={path} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                                                    {title}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
