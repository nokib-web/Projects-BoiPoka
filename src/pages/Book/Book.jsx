import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ book }) => {
    console.log(book)
    const { bookName, author, bookId,  yearOfPublishing, tags, rating, category, image } = book


    return (
       <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-lg p-6 border-1 border-gray-100 ">
            <figure className='p-4 bg-gray-100 w-2/3 mx-auto rounded-2xl'>
                <img className='h-[166px]'
                    src={image}
                    alt="Book" />
            </figure>
            <div className="card-body">
                <div className='flex justify-center gap-6'>
                    {
                        tags.map((tag,index) => <button key={index} className='btn'>{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p className='font-semibold'>Book By: {author}</p>
                <div className="card-actions border-t border-dashed  justify-end">
                    <div className="badge mt-4 badge-outline">{category}</div>
                    <div className="badge mt-4 badge-outline">{rating}<FaStarHalfAlt /></div>
                </div>
            </div>
        </div>
       </Link>
    );
};

export default Book;