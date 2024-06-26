'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleLeft, FaBell } from "react-icons/fa6";

const DashboardNavbar = ({ setIsSidebarOpen, isSidebarOpen }) => {
    const session = useSession()
    console.log(session);

    return (
        <div className="h-16">
            <nav className="py-3 px-4 flex justify-between items-center fixed top-0 left-0 w-full h-16 bg-base-100 shadow z-20">
                <div className='flex items-center gap-3'>
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='md:hidden flex items-center btn btn-sm btn-ghost gap-0'>
                        <span>Menu</span>
                        <span className={`${isSidebarOpen && 'rotate-180'} duration-200 rounded-r`}>
                            <FaAngleLeft size={15} />
                        </span>
                    </button>
                    <Link className="text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 py-2 px-3 rounded-md" href="/">
                        Next Hero
                    </Link>
                </div>
                <div className="flex gap-2 items-center">
                    <button className='btn btn-ghost btn-sm btn-circle text-warning'>
                        <FaBell size={20} />
                    </button>
                    {session.status === 'loading' && <span>Loading...</span>}
                    {session.status === 'authenticated' &&
                        <>
                            <button onClick={signOut} className="btn btn-sm btn-ghost p-2 rounded">Logout</button>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <Image width={40} height={40} alt="Tailwind CSS Navbar component" src={session?.data?.user?.image} />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </nav>
        </div>
    );
};
export default DashboardNavbar;