"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import BookCard from '@/app/components/BookCard'
import Heading from '@/app/components/Heading'
import { useCart } from '../../Cart/CartPageComponent/cartContext.js'

import axios from 'axios'
import { BOOK_END_POINT } from '../../../constant.js';


const FeatureBooksSection = () => {

    const router = useRouter();
    const { addToCart } = useCart();

    const [bookArray, setbookArray] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const BookAPI = async () => {
        try {
            setisLoading(true)
            const result = await axios.get(`${BOOK_END_POINT}`);
            const data = result.data.books;
            setbookArray(data);
            setisLoading(false)
        } catch (error) {
            console.log("error from api integreation ", error);
        }
    }

    useEffect(() => {
        BookAPI();
    }, [])


    const handleAddToCart = (book) => {
        addToCart(book);
        router.push("/pages/Cart");
    }

    const handleShowMore = (book) => {
        localStorage.setItem('selectedBook', JSON.stringify(book));
        router.push("/pages/ProductDetail");
    }

    return (
        <>
            <Heading
                HeadingName={"BEST SELLER"}
            />
            {isLoading == true ? (
                <img 
                    src='/svg/preloader1.svg' 
                    className='flex w-full h-screen justify-center items-center'
                />
            ) : (
                <div className='grid grid-cols-3 w-full h-auto min-h-[100vh] place-items-center'>
                    {bookArray.slice(0, 3).map((data) => (
                        <BookCard
                            key={data.id}
                            imageSrc={data.image_url}
                            title={data?.BookName}
                            author={data?.BookAuthor}
                            content={data?.BookSummary}
                            price={data?.BookPrice}
                            onAddToCart={() => { handleAddToCart(data) }}
                            onShowMore={() => { handleShowMore(data) }}
                        />
                    ))}
                </div>)
            }
        </>
    )
}

export default FeatureBooksSection