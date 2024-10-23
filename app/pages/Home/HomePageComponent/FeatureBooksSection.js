"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BookCard from '@/app/components/BookCard'
import Heading from '@/app/components/Heading'

import axios from 'axios'
import { BOOK_END_POINT } from '@/app/constant';


const FeatureBooksSection = () => {

    const router = useRouter();

    const [bookArray, setbookArray] = useState([]);

    const BookAPI = async function name() {
        try {
            const result = await axios.get(BOOK_END_POINT);
            const data = result.data.books;
            setbookArray(data);
        } catch (error) {
            console.log("error from api integreation ", error);
        }
    }

    useEffect(() => {
        BookAPI();
    }, [])

    const handleAddToCart = () => {
        const bookData = bookArray;
        localStorage.setItem('bookData', JSON.stringify(bookData));
        router.push("/pages/Cart");
    }

    const handleBuyNow = () => {
        console.log("clicked buy now");
    }

    return (
        <>
            <Heading
                HeadingName={"BEST SELLER"}
            />
            <div className='grid grid-cols-3 w-full h-auto min-h-[100vh] place-items-center'>
                {bookArray.slice(0, 3).map((data) => (
                    <BookCard
                        imageSrc={""}
                        title={data?.BookName}
                        author={data?.BookAuthor}
                        content={data?.BookSummary}
                        price={data?.BookPrice}
                        onAddToCart={() => { handleAddToCart() }}
                        onBuyNow={() => { handleBuyNow() }}
                    />
                ))}
            </div>
        </>
    )
}

export default FeatureBooksSection