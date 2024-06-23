import React from 'react';

const Hero = () => {
    return (
        <header>
            <div className='w-full'>
                <div className="h-[550px] flex flex-col justify-center items-center w-full shadow-lg dark:shadow-rose-500/15">
                    <h1 className="text-5xl font-bold mb-4 text-center">
                        Welcome to Our Website
                    </h1>
                    <p className="text-xl mb-8 text-center">
                        We provide the best solutions for your business.
                    </p>
                    <div className='flex gap-2'>
                        <button className='btn btn-primary'>Contact Us</button>
                        <button className='btn btn-primary'>Learn More</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;