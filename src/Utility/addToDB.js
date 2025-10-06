import { toast } from "react-toastify";

const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList")
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData
    }
    else {
        return [];
    }
}

const getWishListBook = () => {
    const wishListSTR = localStorage.getItem('wishlist')

    if (wishListSTR) {
        const wishListData = JSON.parse(wishListSTR)
        return wishListData
    }
   
    else {
        return []
    }
}


const addToStoredDB = (id) => {

     let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];


    const storedBookData = getStoredBook();

    if (storedBookData.includes(id)) {
        toast("vai ei book already exist")
    }
     else if (wishlist.includes(id)) {
        toast("Want to read?");
        return;
    }
    else {
        storedBookData.push(id);

        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList", data)
    }

}



const addToWishlist = (id) => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    let readList = JSON.parse(localStorage.getItem('readList')) || [];

    // Prevent from being in both lists
    if (readList.includes(id)) {
        toast("This book is already marked as Read!");
        return;
    }

    if (!wishlist.includes(id)) {
        wishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
};


export { addToStoredDB, getStoredBook, addToWishlist, getWishListBook };