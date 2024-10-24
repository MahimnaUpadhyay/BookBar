import Heading from '@/app/components/Heading'
import React from 'react'

const WhoWeAre = () => {
    return (
        <>
            <Heading
                HeadingName={"Who We Are?"}
            />

            <div className="flex flex-col w-[800px] text-lg gap-5 bg-accent p-5 rounded-md">
                <p>
                    We're your one-stop shop for digital books. Discover a vast collection of titles across all genres, from classic literature to contemporary bestsellers. Whether you're a bookworm or simply looking for a good read, we've got you covered. Explore our curated selection and start reading today!
                </p>

                <p>
                    <b>Our Mission</b> <br />

                    At our e-book store, we're passionate about making books accessible to everyone. We believe that everyone should have the opportunity to read and learn, regardless of their circumstances. That's why we offer a wide range of affordable e-books, so you can find the perfect read for your budget and interests.
                </p>

                <p>
                    <b>Our Values</b> <br />

                    We value our customers and their experiences. We strive to provide excellent customer service, ensuring that you have a positive and enjoyable shopping experience. We also value our authors and their work. We're proud to showcase their talents and share their stories with the world.
                </p>

                <p>
                    <b>Our Team</b> <br />

                    We're a team of passionate book lovers who are dedicated to providing you with the best possible e-book experience. We're always here to help you find the perfect book or answer any questions you may have.
                </p>
            </div>
        </>
    )
}

export default WhoWeAre