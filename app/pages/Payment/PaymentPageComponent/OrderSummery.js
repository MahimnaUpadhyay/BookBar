"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const OrderSummery = ({ nextStep, setFormData, formData }) => {

    const router = useRouter();

    const [bookData, setbookData] = useState([]);

    useEffect(() => {
        try {
            const data = localStorage.getItem('selectedBook');
            const parsedData = JSON.parse(data);
            setbookData(parsedData)
        } catch (error) {
            console.log("error ", error);
        }
    }, []);

    const showTotal = () => {
        const basePrice = bookData?.BookPrice || 0;
        const TotalPrice = basePrice + (5 * basePrice / 100) + 2.50;
        return TotalPrice.toFixed(2);
    };


    const handleNext = () => {
        nextStep();
    }

    const handleAddToCart = (book) => {
        localStorage.setItem('selectedBook', JSON.stringify(book));
        router.push("/pages/Cart");
    }

    return (
        <>
            <div className="grid grid-cols-2 w-full h-auto place-items-center bg-accent rounded-lg">
                <div className='flex w-full gap-3 justify-center items-center'>
                    <div className="w-40 h-40 rounded-md flex justify-start items-center">
                        <img
                            src='https://dummyimage.com/400x400'
                            alt='book image'
                            className='object-cover w-40 h-40 p-2 rounded-md'
                        />
                    </div>

                    <div className='flex flex-col text-black gap-3'>
                        <h2 className='font-bold'>{bookData?.BookName}</h2>
                        <p className='text-lg font-medium text-gray-600'>{bookData?.BookAuthor}</p>
                        <p className='text-md text-gray-600 w-[400px]'>{bookData?.BookSummary}</p>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <p className='text-lg font-semibold'>Sub total: {bookData?.BookPrice}</p>
                    <p className='text-lg font-semibold'>Tax: 5%</p>
                    <p className='text-lg font-semibold'>Delivery: $2.50</p>
                    <p className='text-lg font-semibold'>Total: ${showTotal()}</p>
                </div>

                <div className='flex gap-5 mb-2 col-span-2'>
                    <div>
                        <Button
                            className="bg-accent text-black hover:bg-primary hover:text-white 
                                                    px-8 py-2 rounded-md"
                            onClick={() => { handleAddToCart(bookData) }}
                        >
                            Add To Cart
                        </Button>
                    </div>
                    <div>
                        <Button
                            className="bg-primary text-white px-8 py-2 rounded-md"
                            onClick={() => { handleNext() }}
                        >
                            Buy Now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderSummery