'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const pathName = usePathname();

    const session = useSession()
    const { status } = session
    console.log(session);

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
                    {
                        status === 'loading' &&
                        <span>Loading...</span>
                    }
                    {
                        status === 'authenticated' &&
                        <>
                            <span>{session?.data?.user?.email}</span>
                            {/* <button className="btn btn-sm btn-secondary">
                                Logout
                            </button> */}
                        </>
                    }
                    {
                        status === 'unauthenticated' &&
                        <Link href={'http://localhost:3000/api/auth/signin'}><button className="btn btn-sm btn-primary">
                            Sign In
                        </button></Link>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
