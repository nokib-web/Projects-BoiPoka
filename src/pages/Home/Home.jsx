import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';

const Home = () => {
    return (
        <div className='max-w-10/12 mx-auto'>
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;