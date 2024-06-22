'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {
    const pathName = usePathname();

    const session = useSession()
    const { status } = session
    // console.log(session);

    const navLinks = [
        { name: 'About', href: '/about', type: 'public' },
        { name: 'Blogs', href: '/blogs', type: 'public' },
        { name: 'Images', href: '/images', type: 'public' },
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
                        <div className='flex items-center gap-1'>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full" title={session?.data?.user?.type}>
                                        <Image src={session?.data?.user?.image} width={40} height={40} alt='matha damage' />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-lg menu menu-sm dropdown-content bg-base-100 rounded-md w-52">
                                    <li>
                                        <div className='flex justify-between items-center'>
                                            <span>{session?.data?.user?.name}</span> <span className='badge badge-secondary'>{session?.data?.user?.type}</span>
                                        </div>
                                    </li>
                                    <li><Link href={'/dashboard'}>Dashboard</Link></li>
                                    <li>
                                        <button onClick={() => signOut()}>
                                            Sign Out
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
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
