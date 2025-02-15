import Heading from '@/app/components/Heading'
import { ArrowRight, Check } from 'lucide-react'
import React from 'react'

const PricingSection = () => {
    return (
        <>
            <Heading
                HeadingName={"MEMBER PERKS"}
            />

            <section className="text-gray-600 body-font overflow-hidden">
                <div className="grid grid-cols-3 w-full h-auto min-h-screen place-items-center gap-10">
                    <div className="w-[250px] h-[450px]">

                        {/* Basic TIER */}

                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden justify-between">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Page Turner</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$28</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>5% Discount
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Early Access to Sale
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Free BookMarks
                            </p>
                            <button className="flex w-full justify-between items-center p-2 rounded-sm text-black
                                                bg-secondary hover:bg-primary hover:text-white">
                                Join Now
                                <ArrowRight />
                            </button>
                            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them Book Bar.</p>
                        </div>
                    </div>

                    {/* PRO TIER */}

                    <div className="w-[250px] h-[450px]">
                        <div className="h-full p-6 rounded-lg border-2 border-primary flex flex-col relative overflow-hidden justify-between">
                            <span className="bg-primary text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Book Enthusiast</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$38</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>10% Discount
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Free Shipping
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Early Sale Access
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Invitations to Meet n Greet with Authors
                            </p>
                            <button className="flex w-full justify-between items-center bg-primary p-2 rounded-sm text-white">
                                Join Now
                                <ArrowRight />
                            </button>
                            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them Book Bar.</p>
                        </div>
                    </div>

                    {/* ADVANCE TIER */}

                    <div className="w-[250px] h-[450]">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden justify-between">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Literary Maven</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$56</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>20% Discount
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Free Shipping
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Early Access to Sale
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Invitations to Meet n greet with Authors
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <Check />
                                </span>Priority Shipping
                            </p>
                            <button className="flex w-full justify-between items-center p-2 rounded-sm text-black
                                                bg-secondary hover:bg-primary hover:text-white">
                                Join Now
                                <ArrowRight />
                            </button>
                            <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them Book Bar.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingSection