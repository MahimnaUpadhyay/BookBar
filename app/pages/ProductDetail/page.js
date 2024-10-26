"use client"

import { Facebook, Instagram, Star, StarHalf, Twitter } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
const page = () => {

    const router = useRouter();

    const [BookData, setBookData] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem('selectedBook');
        console.log("Retrieved data:", data);
        if (data) {
            try {
                const parsedData = JSON.parse(data);
                console.log("Parsed data:", parsedData);
                setBookData(parsedData);
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        }
    }, []);

    const handleBuyNow = (book) => {
        localStorage.setItem("selectedBook", JSON.stringify(book));
        router.push("/pages/Payment")
    }

    const handleAddToCart = (book) => {
        localStorage.setItem("selectedBook", JSON.stringify(book));
        router.push("/pages/Cart")
    }

    return (
        <>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="flex flex-col w-full h-auto justify-center items-center p-5">
                    <div className="grid grid-cols-2 w-full h-auto place-items-center p-5">
                        <div className='w-[450px] h-[450px]'>
                            <img
                                alt="ecommerce"
                                className="w-[450px]h-[450px] object-cover object-center rounded"
                                src="https://dummyimage.com/400x400"
                            />
                        </div>

                        <div className="flex flex-col w-full h-auto justify-between items-start p-5">
                            <h2 className="text-sm title-font text-gray-600 tracking-widest">
                                Book<span className="bg-primary text-white">Bar</span>
                            </h2>

                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                {BookData.BookName}
                            </h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <Star className='text-primary' />
                                    <Star className='text-primary' />
                                    <Star className='text-primary' />
                                    <Star className='text-primary' />
                                    <StarHalf className='text-primary' />
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s gap-4">
                                    <a className="text-gray-500">
                                        <Twitter />
                                    </a>
                                    <a className="text-gray-500">
                                        <Instagram />
                                    </a>
                                    <a className="text-gray-500">
                                        <Facebook />
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed">
                                {BookData.BookAuthor}
                            </p>

                            <span className="title-font font-medium text-2xl text-gray-900">
                                {BookData.BookSummary}
                            </span>

                            <div className='flex gap-5'>
                                <Button
                                    className="bg-accent text-black hover:bg-primary hover:text-white 
                                                    px-8 py-2 rounded-md mt-5"
                                    onClick={() => { handleBuyNow(BookData) }}
                                >
                                    Buy Now
                                </Button>

                                <Button
                                    className="bg-primary text-white px-8 py-2 rounded-md mt-5"
                                    onClick={() => { handleAddToCart(BookData) }}
                                >
                                    Add to Cart
                                </Button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page