"use client"
import Link from 'next/link';
import React from 'react';

const page = () => {

    async function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const image = form.image.value || 'https://i.ibb.co/T05tVHk/new-profile.png';
        const email = form.email.value;
        const type = form.type.value;
        const password = form.password.value;
        const user = { name, email, password, image, type };
        try {
            const res = await fetch('http://localhost:3000/api/auth/signup/new-user', {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'content-type': 'application/json'
                }
            })
            console.log(res);
            e.target.reset()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='min-h-screen p-4 '>
            <h3 className='text-center mt-16 mb-10'><Link className="text-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-rose-600 py-2 px-3 rounded-md" href="/">
                Next Hero
            </Link></h3>
            <div className='max-w-md w-full mx-auto mb-12'>
                <form onSubmit={handleSubmit} className='flex p-6 flex-col *:w-full *:mb-4 bg-base-100 rounded-md shadow-lg shadow-rose-500/20'>
                    <h3 className='text-3xl font-semibold text-center pb-4'>Create a new account</h3>
                    <input type="text" required className='input input-bordered' placeholder='Name' name='name' />
                    <input type="text" className='input input-bordered' placeholder='Image Url' name='image' />
                    <select name='type' defaultValue="user" className='select select-bordered'>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                    <input type="text" required className='input input-bordered' placeholder='email' name='email' />
                    <input type="text" required className='input input-bordered' placeholder='password' name='password' />
                    <button type='submit' className='btn btn-primary text-lg font-semibold'>Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default page;