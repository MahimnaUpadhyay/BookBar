"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

const HeroSection = () => {

    const router = useRouter();

    return (
        <>
            <section className="grid grid-cols-2 container min-h-[100vh] h-auto place-items-center">
                <div className="w-[450px] h-[450px] object-cover">
                    <img
                        src="/image/hero_img2.png"
                        alt='adf'
                        className='w-[450px] h-[450px] object-cover'
                    />
                </div>
                <div className='flex flex-col flex-wrap justify-center items-center gap-3'>
                    <div className='flex justify-start w-full'>
                        <h1 className='text-3xl font-semibold'>A Universe of Stories at Your {' '}
                            <span className='bg-primary text-white p-1 rounded-sm'>Fingertips</span>
                        </h1>
                    </div>
                    <div className='flex justify-start w-full'>
                        <h3 className='text-gray-500 w-[500px]'>
                            Discover, Explore, and Indulge. Whether you're searching for a timeless classic, the latest bestseller,
                            or a hidden gem, we’ve got you covered. Dive into genres that captivate your mind and enrich your soul.
                            <br /><br />
                            Unlock exclusive deals. Your next favorite book is just a click away!
                        </h3>
                    </div>
                    <div className='flex justify-start w-full'>
                        <Button
                            className='hover:text-white px-10 py-5 bg-accent text-black'
                            onClick={() => { router.push("/pages/Books") }}>
                            Shop Now
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection