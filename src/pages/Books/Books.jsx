import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);
    
    useEffect(() => {
        fetch("bookData.json")
            .then(res => res.json())
            .then(data => {

                setAllBooks(data)
            })
    }, [])


    return (
        <div>
            <h1>hello ami book</h1>
        </div>
    );
};

export default Books;