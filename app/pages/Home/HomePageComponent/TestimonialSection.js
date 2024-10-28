import Heading from '@/app/components/Heading'
import React from 'react'

const TestimonialSection = () => {
    return (
        <>
            <Heading 
                HeadingName={"CUSTOMER REVIEWS"}        
            />

            <section className="text-gray-600 body-font p-5">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    src="/image/men1.jpg"
                                    alt="testimonial" 
                                    className="w-[80px] h-[80px] mb-8 object-cover object-center rounded-full inline-block "
                                />
                                <p className="leading-relaxed">
                                    The quality of Book is better and price is also resonable. Delivery service is also fast.
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Mark</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img
                                    src="/image/men2.jpg" 
                                    alt="testimonial" 
                                    className="w-[80px] h-[80px] mb-8 object-cover object-center rounded-full inline-block"
                                />
                                <p className="leading-relaxed">
                                    They always have latest collection with them and books are always in stock.   
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Jackson</h2>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img 
                                    src="/image/woman1.jpg"
                                    alt="testimonial" 
                                    className="w-[80px] h-[80px] mb-8 object-cover object-center rounded-full inline-block"
                                />
                                <p className="leading-relaxed">
                                    I always like how they give free goodies when you receive a order    
                                </p>
                                <span className="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Kaori</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialSection