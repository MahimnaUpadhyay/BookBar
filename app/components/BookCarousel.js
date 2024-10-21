import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

import BookCard from './BookCard';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';

const BookCarousel = () => {
    const handleAddToCart = () => {
        console.log('clicked add to cart');
    };

    const handleBuyNow = () => {
        console.log('clicked buy now');
    };

    const defaultImage = 'https://via.placeholder.com/150';

    const books = [
        {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            content: 'A classic novel of the Jazz Age.',
            price: '20',
            imageSrc: defaultImage,
        },
        {
            title: '1984',
            author: 'George Orwell',
            content: 'A dystopian social science fiction novel.',
            price: '18',
            imageSrc: defaultImage,
        },
        {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            content: 'A novel about racial injustice in the Deep South.',
            price: '25',
            imageSrc: defaultImage,
        },
        {
            title: 'Moby Dick',
            author: 'Herman Melville',
            content: 'A narrative of the whaling ship Pequod.',
            price: '22',
            imageSrc: defaultImage,
        },
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            content: 'A romantic novel about manners and marriage.',
            price: '15',
            imageSrc: defaultImage,
        },
    ];

    return (
        <div className='flex w-full items-center justify-center h-screen'>
            <Carousel className="relative w-4/5 max-w-6xl">
                <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
                    <ArrowLeftCircle size={32} />
                </CarouselPrevious>

                <CarouselContent className="flex gap-4 overflow-hidden">
                    {books.map((book, index) => (
                        <CarouselItem 
                            key={index} 
                            className="w-1/3 flex-shrink-0 p-4"
                        >
                            <BookCard
                                imageSrc={book.imageSrc}
                                title={book.title}
                                content={book.content}
                                price={book.price}
                                onAddToCart={handleAddToCart()}
                                onBuyNow={handleBuyNow()}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
                    <ArrowRightCircle size={32} />
                </CarouselNext>
            </Carousel>
        </div>
    );
};

export default BookCarousel;
