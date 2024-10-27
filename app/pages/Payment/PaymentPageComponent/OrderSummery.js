"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/backend/API/Auth/supabase/SupabaseWrapper";

const OrderSummary = ({ nextStep, setFormData, formData }) => {
  const router = useRouter();
  const { user } = useAuth();
  const [bookData, setBookData] = useState(null); // Ensure it starts as null

  useEffect(() => {
    const data = localStorage.getItem("selectedBook");
    if (data) {
      try {
        const parsedData = JSON.parse(data);
        setBookData(parsedData || {});
      } catch (error) {
        console.error("Error reading book data:", error);
      }
    }
  }, []);

  const showTotal = () => {
    const basePrice = parseFloat(bookData?.BookPrice) || 0;
    const totalPrice = basePrice + (5 * basePrice) / 100 + 2.5;
    return totalPrice.toFixed(2);
  };

  const handleNext = () => {
    if (user) {
      nextStep();
    } else {
      router.push("/pages/Auth/Login");
    }
  };

  const handleAddToCart = (book) => {
    localStorage.setItem("selectedBook", JSON.stringify(book));
    router.push("/pages/Cart");
  };

  if (!bookData) {
    return <p>Loading book details...</p>; // Handle loading state gracefully
  }

  return (
    <div className="grid grid-cols-2 w-full h-auto place-items-center bg-accent rounded-lg">
      <div className="flex w-full gap-3 justify-center items-center">
        <div className="w-40 h-40 rounded-md flex justify-start items-center">
          <img
            src="https://dummyimage.com/400x400"
            alt="book image"
            className="object-cover w-40 h-40 p-2 rounded-md"
          />
        </div>

        <div className="flex flex-col text-black gap-3">
          <h2 className="font-bold">{bookData?.BookName || "Untitled Book"}</h2>
          <p className="text-lg font-medium text-gray-600">
            {bookData?.BookAuthor || "Unknown Author"}
          </p>
          <p className="text-md text-gray-600 w-[400px]">
            {bookData?.BookSummary || "No summary available."}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">
          Sub total: ${bookData?.BookPrice || "0.00"}
        </p>
        <p className="text-lg font-semibold">Tax: 5%</p>
        <p className="text-lg font-semibold">Delivery: $2.50</p>
        <p className="text-lg font-semibold">Total: ${showTotal()}</p>
      </div>

      <div className="flex gap-5 mb-2 col-span-2">
        {user ? (
          <>
            <Button
              className="bg-accent text-black hover:bg-primary hover:text-white px-8 py-2 rounded-md"
              onClick={() => handleAddToCart(bookData)}
            >
              Add To Cart
            </Button>
            <Button
              className="bg-primary text-white px-8 py-2 rounded-md"
              onClick={handleNext}
            >
              Buy Now
            </Button>
          </>
        ) : (
          <Button
            className="bg-primary text-white px-8 py-2 rounded-md"
            onClick={() => router.push("/pages/Auth/Login")}
          >
            Login to Continue
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
