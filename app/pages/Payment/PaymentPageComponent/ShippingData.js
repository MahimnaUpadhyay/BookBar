"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const ShippingData = ({ nextStep, prevStep, setFormData, formData }) => {

    const [shipping, setShipping] = useState({
        address: "",
        city: "",
        zip: "",
    });
    const [Book, setBook] = useState([])

    useEffect(() => {
        const bookData = localStorage.getItem("selectedBook");
        const parseData = JSON.parse(bookData);
        setBook(parseData)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipping((prev) => ({ ...prev, [name]: value }));
    };

    const handleNext = () => {
        if (!shipping.address || !shipping.city || !shipping.zip) {
            toast.error('Please fill details', { position: 'top-right', autoClose: 3000 });
        } else {
            setFormData((prev) => ({ ...prev, shipping, Book }));
            nextStep();
        }
    };


    return (
        <>
            <ToastContainer />
            <div className="grid grid-cols-2 w-full h-auto place-items-center bg-accent p-5 rounded-md">
                <div className="flex flex-col w-[650px] gap-3 justify-center">
                    <h1 className="text-2xl font-bold">Address Details</h1>
                    <input
                        name="address"
                        placeholder="Address"
                        value={shipping.address}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    <input
                        name="city"
                        placeholder="City"
                        value={shipping.city}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    <input
                        name="zip"
                        placeholder="ZIP Code"
                        value={shipping.zip}
                        onChange={handleChange}
                        className="border p-2 w-full"
                    />
                    <div className="space-x-2">
                        <Button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">
                            Back
                        </Button>
                        <Button
                            className="bg-primary text-white px-4 py-2 rounded"
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    </div>
                </div>

                <div className="flex w-[350px] h-[350px] justify-center items-center 
                            object-cover object-center rounded-lg">
                    <img
                        src="/image/address.jpg"
                        className="w-[350px] h-[350px] object-cover object-center rounded-lg"
                    />
                </div>
            </div>
        </>
    );
}
export default ShippingData