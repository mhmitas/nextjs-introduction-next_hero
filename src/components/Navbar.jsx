'use client';
import Link from 'next/link';
import React from 'react';
import Btn from './Btn';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathName = usePathname();

    const navLinks = [
        { name: 'About', href: '/about', type: 'public' },
        { name: 'Blogs', href: '/blogs', type: 'public' },
        { name: 'Images', href: '/images', type: 'public' },
        { name: 'Dashboard', href: '/dashboard', type: 'privet' },
    ];

    return (
        <nav className="w-full shadow-md bg-base-100">
            <div className="mx-auto flex items-center justify-between py-3 px-4">
                <Link className="text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 py-2 px-3 rounded-md" href="/">
                    Next Hero
                </Link>
                <div className="flex items-center space-x-4">
                    <ul className="flex space-x-4">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link className={`hover:text-blue-500 ${link.href === pathName && 'text-blue-500'
                                    }`} href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="border border-primary hover:bg-primary hover:text-white font-semibold py-1 px-2 rounded">
                        Sign In
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
