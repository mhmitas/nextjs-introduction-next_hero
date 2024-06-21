import Image from 'next/image';
import React from 'react';

const ImagePage = () => {
    return (
        <div>
            {/* <img src={'park.jpg'} alt="" /> */}
            <Image src={'/park.jpg'} width={1920} height={1280} alt="" />
        </div>
    );
};

export default ImagePage;