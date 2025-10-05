import React, { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    // const [allBooks, setAllBooks] = useState([]);
    
    // useEffect(() => {
    //     fetch("bookData.json")
    //         .then(res => res.json())
    //         .then(data => {

    //             setAllBooks(data)
    //         })
    // }, [])
     console.log(data)

    return (
        <div className='my-10' >
            <h1 className='text-4xl font-bold text-center my-10'>Books</h1>
           <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
             <Suspense fallback={<span>Loading.....</span>}>
                {
                    data.map((book)=><Book book={book} key={book.bookId}></Book>)
                }
            </Suspense>
           </div>
        </div>
    );
};

export default Books;