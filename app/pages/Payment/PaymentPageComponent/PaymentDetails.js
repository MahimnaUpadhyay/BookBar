"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";

const PaymentDetails = ({ prevStep, formData }) => {
  const [card, setCard] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!card.cardNumber || !card.expiry || !card.cvc) {
      // TODO USE REACT TOAST
      alert("Please fill out all payment details.");
      return;
    }
    console.log("Order Submitted:", { ...formData, card });
    alert("Order placed successfully!");
  };


  return (
    <div className="grid grid-cols-2 w-full h-auto place-items-center bg-accent p-5 rounded-md">
      <div className="flex flex-col w-[650px] gap-3 justify-center">
        <h1 className="text-2xl font-bold">Payment Details</h1>
        <input
          name="cardNumber"
          placeholder="Card Number"
          value={card.cardNumber}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="expiry"
          placeholder="Expiry Date (MM/YY)"
          value={card.expiry}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="cvc"
          placeholder="CVC"
          value={card.cvc}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <div className="space-x-2">
          <Button onClick={prevStep} className="bg-gray-300 px-4 py-2 rounded">
            Back
          </Button>
          <Button
            className="bg-primary text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Place Order
          </Button>
        </div>
      </div>

      <div className="flex w-[350px] h-[350px] justify-center items-center 
                            object-cover object-center rounded-lg">
        <img
          src="/image/payment.jpg"
          className="w-[350px] h-[350px] object-cover object-center rounded-lg"
        />
      </div>
    </div>
  );
}
export default PaymentDetails