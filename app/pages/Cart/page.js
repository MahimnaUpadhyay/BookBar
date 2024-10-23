"use client"

import { Facebook, Instagram, Star, StarHalf, Twitter } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';
const page = () => {

  const [bookArray, setbookArray] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('bookData');
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

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">

          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">

              </h2>

              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">

              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <StarHalf />
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

              </p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">

                </span>

                <Button
                  className="bg-accent text-black hover:bg-primary hover:text-white 
                               px-4 py-2 rounded-md"
                > Buy Now </Button>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page