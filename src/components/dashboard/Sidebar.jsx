'use client'
import { SidebarContext } from '@/app/(dashboards)/dashboard/layout';
import Link from 'next/link';
import React, { useContext } from 'react';

const Sidebar = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext)

    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            setIsSidebarOpen(false)
        }
    }

    return (
        <section onClick={handleOverlayClick} className={`${isSidebarOpen && 'fixed inset-x-0 h-full bg-black bg-opacity-50'}`}>
            <div className={`fixed ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} w-56 bg-base-100 duration-200 md:translate-x-0 overflow-y-auto h-[calc(100vh-64px)]`}>
                <div className='h-full flex flex-col justify-between'>
                    <ul className='menu'>
                        <li><Link href={'#'}>Home</Link></li>
                        <li><Link href={'#'}>Profile</Link></li>
                        <li><Link href={'#'}>Settings</Link></li>
                    </ul>
                    <button className='btn btn-primary w-full'>Hello</button>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
