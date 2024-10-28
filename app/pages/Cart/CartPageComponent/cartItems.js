"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "./cartContext";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartItem() {

    const router = useRouter();

    const { cart, removeFromCart, clearCart } = useCart();

    const [quantities, setQuantities] = useState(
        cart.reduce((acc, item) => ({ ...acc, [item.id]: item.quantity }), {})
    );

    const totalPrice = cart.reduce(
        (acc, item) => acc + item.BookPrice * quantities[item.id],
        0
    );

    const updateQuantity = (id, delta) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) + delta),
        }));
    };

    const handleOnContinue = () => {
        const cartData = {
            items: cart,
            quantities,
            totalPrice,
        };
        localStorage.setItem("cartItems", JSON.stringify(cartData));
        router.push("/pages/Payment")
    }

    return (
        <>
            <ArrowLeft size="40" className="ml-2 mt-2" onClick={() => (router.push("/"))} />
            <section className="py-24 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                    <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
                        Shopping Cart
                    </h2>

                    {cart.length === 0 ? (
                        <p className="text-center text-xl text-gray-500">
                            Your cart is empty.
                        </p>
                    ) : (
                        <>
                            <div className="hidden lg:grid grid-cols-2 py-6 place-items-between">
                                <div className="font-normal text-xl leading-8 text-gray-500">
                                    Product
                                </div>
                                <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                                    <span className="w-full max-w-[260px] text-center">Quantity</span>
                                    <span className="w-full max-w-[200px] text-center">Total</span>
                                </p>
                            </div>

                            {cart.map((item) => (
                                <><div
                                    key={item.id}
                                    className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
                                >
                                    <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                                        <div className="img-box">
                                            <img
                                                src={item.image_url || "https://via.placeholder.com/150"}
                                                alt={item.BookName}
                                                className="xl:w-[140px] rounded-xl object-cover" />
                                        </div>
                                        <div className="pro-data w-full max-w-sm">
                                            <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                                                {item.BookName}
                                            </h5>
                                            <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                                {item.BookAuthor || "Book"}
                                            </p>
                                            <h6 className="font-medium text-lg leading-8 text-primary max-[550px]:text-center">
                                                ${item.BookPrice.toFixed(2)}
                                            </h6>
                                        </div>
                                    </div>

                                    <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                                        <div className="flex items-center w-full mx-auto justify-center">
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                            >
                                                +
                                            </button>
                                            <input
                                                type="text"
                                                value={quantities[item.id]}
                                                readOnly
                                                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] py-[15px] text-center bg-transparent" />
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                                            >
                                                -
                                            </button>
                                        </div>
                                        <h6 className="text-primary font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                                            ${(item.BookPrice * quantities[item.id]).toFixed(2)}
                                        </h6>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 font-semibold text-lg"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                                </>
                            ))}

                            <div className="flex w-full mb-3 justify-between items-center">
                                <h3 className="text-2xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>

                                <div className="flex items-center justify-between mt-8">
                                    <Button
                                        onClick={clearCart}
                                        className="rounded-full py-2 px-4 bg-red-500 text-white font-semibold transition-all 
                                         duration-500 hover:bg-red-600"
                                    >
                                        Clear Cart
                                    </Button>

                                </div>
                            </div>

                            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
                                <Button
                                    className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none 
                                        rounded text-base mt-4 md:mt-0 text-white font-medium"
                                    onClick={() => { handleOnContinue() }}
                                >
                                    Continue to Payment
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
