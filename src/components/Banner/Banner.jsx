import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-10 rounded-2xl my-10 bg-gray-100 w-10/12 mx-auto '>
            <div >
                <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Accusantium, recusandae?</h1>
                <button className='btn btn-primary my-2'>Test Test</button>
            </div>
            <div>
                <img className=' h-[180px] rounded-lg' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;