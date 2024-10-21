import Heading from '@/app/components/Heading'
import React from 'react'

const TestimonialSection = () => {
    return (
        <>
            <Heading 
                HeadingName={"CUSTOMER REVIEWS"}        
            />

            <section class="text-gray-600 body-font p-5">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/302x302" />
                                <p class="leading-relaxed">
                                    The quality of Book is better and price is also resonable. Delivery service is also fast.
                                </p>
                                <span class="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">USER 1</h2>
                            </div>
                        </div>
                        <div class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/300x300" />
                                <p class="leading-relaxed">
                                    They always have latest collection with them and books are always in stock.   
                                </p>
                                <span class="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">USER 2</h2>
                            </div>
                        </div>
                        <div class="lg:w-1/3 lg:mb-0 p-4">
                            <div class="h-full text-center">
                                <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://dummyimage.com/305x305" />
                                <p class="leading-relaxed">
                                    I always like how they give free goodies when you receive a order    
                                </p>
                                <span class="inline-block h-1 w-10 rounded bg-primary mt-6 mb-4"></span>
                                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">USER 3</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialSection