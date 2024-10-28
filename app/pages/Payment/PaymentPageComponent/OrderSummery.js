"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/backend/API/Auth/supabase/SupabaseWrapper";

const OrderSummary = ({ nextStep }) => {
  const router = useRouter();
  const { user } = useAuth();

  const [bookData, setBookData] = useState(null);
  const [cartItems, setCartItems] = useState({ items: [], quantities: {}, totalPrice: 0 });
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchBookData = () => {
      const savedBook = localStorage.getItem("selectedBook");
      if (savedBook) {
        try {
          setBookData(JSON.parse(savedBook));
        } catch (error) {
          console.error("Error parsing book data:", error);
        }
      }
    };

    const fetchCartData = () => {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart));
        } catch (error) {
          console.error("Error parsing cart data:", error);
        }
      }
    };

    // Fetch both book and cart data, then stop loading
    fetchBookData();
    fetchCartData();
    setLoading(false);
  }, []);

  const showTotal = () => {
    if (bookData) {
      const basePrice = parseFloat(bookData.BookPrice) || 0;
      const totalPrice = basePrice + (5 * basePrice) / 100 + 2.5;
      return totalPrice.toFixed(2);
    }

      const total = cartItems.items.reduce((acc, item) => {
      const itemTotal = item.BookPrice * (cartItems.quantities[item.id] || 1) + (5 * item.BookPrice) / 100 + 2.5;
      return acc + itemTotal;
    });
    const finalTotal = total + (5 * total) / 100 + 2.5;
    return finalTotal.toFixed(2);
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

  const isSingleBook = !!bookData;

  if (loading) {
    return <p>Loading book or cart details...</p>;
  }

  return (
    <div className="grid gap-6 w-full bg-accent rounded-lg p-6">
      {isSingleBook ? (
        <div className="grid grid-cols-2 gap-4 items-center bg-white p-4 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <img
              src={bookData?.image_url || "https://via.placeholder.com/150"}
              alt={bookData?.BookName}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div className="flex flex-col">
              <h2 className="font-bold text-lg">{bookData?.BookName}</h2>
              <p className="text-gray-600">{bookData?.BookAuthor || "Unknown Author"}</p>
              <p className="text-gray-500">${bookData?.BookPrice?.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ) : (
        cartItems?.items.map((data) => (
          <div key={data?.id} className="grid grid-cols-2 gap-4 items-center bg-white p-4 rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img
                src={data?.image_url || "https://via.placeholder.com/150"}
                alt={data?.BookName}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col">
                <h2 className="font-bold text-lg">{data?.BookName}</h2>
                <p className="text-gray-600">{data?.BookAuthor || "Unknown Author"}</p>
                <p className="text-gray-500">${data?.BookPrice?.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold">
                Quantity: {cartItems.quantities[data?.id] || 1}
              </p>
              <p className="font-semibold">
                Item Total: ${5*(data?.BookPrice * (cartItems?.quantities[data?.id]))/100 + 2.5}
              </p>
            </div>
          </div>
        ))
      )}

      <div className="flex flex-col gap-2 items-end">
        <p className="text-lg font-semibold">Subtotal: ${cartItems?.totalPrice.toFixed(2)}</p>
        <p className="text-lg font-semibold">Tax: 5%</p>
        <p className="text-lg font-semibold">Delivery: $2.50</p>
        <p className="text-xl font-bold">Total: ${showTotal()}</p>
      </div>

      <div className="flex gap-4 justify-end mt-4">
        {user ? (
          <>
            <Button
              className="bg-primary text-white px-8 py-2 rounded-md"
              onClick = {()=> {router.push("/pages/Books")}}
            >
              Shop More
            </Button>

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
