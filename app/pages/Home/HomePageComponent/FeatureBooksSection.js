import BookCard from '@/app/components/BookCard'
import Heading from '@/app/components/Heading'
import React from 'react'

const FeatureBooksSection = () => {

    const handleAddToCart = () => {
        console.log("clicked add to cart");
    }

    const handleBuyNow = () => {
        console.log("clicked buy now");
    }

    return (
        <>
            <Heading
                HeadingName={"BEST SELLER"}
            />
            <div className='grid grid-cols-3 w-full h-auto min-h-[100vh] place-items-center'>
                <BookCard
                    imageSrc={""}
                    title={"Book Title"}
                    author={"Author Name"}
                    content={"Summary of Book"}
                    price={"100"}
                    onAddToCart={handleAddToCart()}
                    onBuyNow={handleBuyNow()}
                />

                <BookCard
                    imageSrc={""}
                    title={"Book Title"}
                    author={"Author Name"}
                    content={"Summary of Book"}
                    price={"100"}
                    onAddToCart={handleAddToCart()}
                    onBuyNow={handleBuyNow()}
                />

                <BookCard
                    imageSrc={""}
                    title={"Book Title"}
                    author={"Author Name"}
                    content={"Summary of Book"}
                    price={"100"}
                    onAddToCart={handleAddToCart()}
                    onBuyNow={handleBuyNow()}
                />
            </div>
        </>
    )
}

export default FeatureBooksSection