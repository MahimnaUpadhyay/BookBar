"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { BOOK_END_POINT } from '@/app/constant';
import { Button } from '@/components/ui/button'
import { useCart } from '../../Cart/CartPageComponent/cartContext';

const BookGrid = () => {

    const router = useRouter();
    const { addToCart } = useCart();

    const [bookArray, setbookArray] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const BookAPI = async function name() {
        try {
            setisLoading(true);
            const result = await axios.get(BOOK_END_POINT);
            const data = result.data.books;
            setbookArray(data);
            setisLoading(false);
        } catch (error) {
            console.log("error from api integreation ", error);
        }
    }

    useEffect(() => {
        BookAPI();
    }, [])

    const handleAddToCart = (book) => {
        addToCart(book)
        router.push("/pages/Cart");
    }

    const handleBuyNow = (book) => {
        localStorage.setItem('selectedBook', JSON.stringify(book));
        router.push("/pages/Payment");
    }

    const handleProductDetail = (book) => {
        localStorage.setItem('selectedBook', JSON.stringify(book));
        router.push("/pages/ProductDetail");
    }

    return (
        <>
            <section className="py-24">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h2 className="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center">
                        Available Books
                    </h2>
                    {isLoading == true ? (
                        <img
                            src='/svg/preloader1.svg'
                            className='flex w-full h-screen justify-center items-center'
                        />
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {bookArray.map((data) => (
                                <a className="max-w-[384px] mx-auto">
                                    <div className="w-full max-w-sm aspect-square">
                                        <img
                                            src={data?.image_url}
                                            alt="cream image"
                                            className="w-full h-full rounded-xl object-cover cursor-pointer"
                                            onClick={() => { handleProductDetail(data) }}
                                        />
                                    </div>
                                    <div className="flex flex-col w-full h-auto justify-between items-start mt-3">
                                        <div className='flex w-full h-auto justify-between items-center mb-2'>
                                            <p className="font-semibold text-xl leading-8 text-black">
                                                {data.BookName}
                                            </p>
                                            <p className="font-semibold text-md leading-8 text-gray-500">
                                                By {data.BookAuthor}
                                            </p>
                                        </div>

                                        <p className="font-medium text-lg leading-8 text-gray-950">
                                            {data.BookSummary}
                                        </p>

                                        <div className='flex w-full h-auto justify-between items-center mt-2'>
                                            <p className="font-semibold text-xl leading-8 text-primary">
                                                ${data.BookPrice}
                                            </p>
                                            <div className='flex gap-3'>

                                                <Button
                                                    onClick={() => { handleBuyNow(data) }}
                                                    className="bg-accent text-black hover:bg-primary hover:text-white 
                                                        px-4 py-2 rounded-md"
                                                >
                                                    Buy Now
                                                </Button>

                                                <Button
                                                    onClick={() => { handleAddToCart(data) }}
                                                    className="bg-primary text-white px-4 py-2 rounded-md"
                                                >
                                                    Add to Cart
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section >

        </>
    )
}

export default BookGrid