import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDB';
import Book from '../Book/Book';




const ReadList = () => {

    // Worst Case
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        // console.log(convertedStoredBooks)
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    }, []);


    const handleSort = (type) => {
        setSort(type)
        if (type === "Pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPage - b.totalPage)
            setReadList(sortedByPage)
        }

        if (type === "Ratings") {
            const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortedByRatings)
        }
    }



    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort by :{sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort("Pages")}><a>Pages</a></li>
                    <li onClick={() => handleSort("Ratings")}><a>Ratings</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I Read {readList.length}

                    </h2>

                    {
                        readList.map(b => <Book key={b.bookId} book={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Book I Add On Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;