import React from 'react';
import bookImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-2 '>
            <div >
                <h1>Lorem ipsum dolor sit amet.</h1>
                <button className='btn btn-primary'>Test</button>
            </div>
            <div>
                <img className='w-3/12 rounded-lg' src={bookImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;