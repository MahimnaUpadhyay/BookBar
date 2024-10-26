"use client"

import { useState } from "react";
import OrderSummery from "./PaymentPageComponent/OrderSummery";
import ShippingData from "./PaymentPageComponent/ShippingData";
import PaymentDetails from "./PaymentPageComponent/PaymentDetails";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const page = () => {

  const router = useRouter();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="container mx-auto p-8">
      <ArrowLeft 
        size={30}
        onClick = {()=>{router.push("/")}}
      />
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
      {step === 1 && (
        <OrderSummery nextStep={nextStep} setFormData={setFormData} formData={formData} />
      )}
      {step === 2 && (
        <ShippingData
          nextStep={nextStep}
          prevStep={prevStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <PaymentDetails prevStep={prevStep} formData={formData} />
      )}
    </div>
  );

}
export default page