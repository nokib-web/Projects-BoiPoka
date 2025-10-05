import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../Utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find((book) => book.bookId === bookId)

    const { bookName, image, author, tags, category, review, totalPages, publisher, yearOfPublishing, rating } = singleBook || {};


    const handleMarkAsRead = id =>{
        // store with id
        // where to store
        // array or collection
        // if book already exist then show alert
        //  if not exist then push on the collection 

        addToStoredDB(id)


    }



    return (
        <div className='md:flex md:justify-between gap-6 my-20'>
            <div className='md:w-1/2 bg-gray-100 rounded-2xl  '>
                <img className=' max-h-[500px] w-2/3 mx-auto p-10' src={image} alt="" />
            </div>
            <div className='md:w-1/2 '>
                <h1 className='font-bold text-4xl'>{bookName}</h1>
                <p>By: {author} </p>
                <p className='border-t border-b text-gray-400 font-semibold '>{category}</p>
                <p>Review: {review}</p>
                <div className=''>
                    Tag:
                    {
                        tags.map((tag, index) => <button key={index} className='btn text-green-400 ml-2 '>{tag}</button>)
                    }
                </div>

                <p className='border-t mt-4'>No. of pages: <span className='font-bold'>{totalPages}</span></p>
                <p>Publishers: <span className='font-bold'>{publisher}</span></p>
                <p>year Of Publishing:{yearOfPublishing}</p>
                <p>Ratings:{rating}</p>
                <button onClick={()=>handleMarkAsRead(id)} className='btn'>Read</button>
                <button className='btn ml-4 btn-primary'>Whishlist</button>

            </div>


        </div>
    );
};

export default BookDetails;