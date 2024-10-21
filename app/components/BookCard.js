import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BookCard = ({ title, author, content, price, onBuyNow, onAddToCart, imageSrc }) => {
    return (
        <Card className="w-[350px] border rounded-lg shadow-lg">
            <div className="relative w-full h-60">
                <img 
                    src={imageSrc} 
                    alt={title} 
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </div>

            <CardHeader className="p-4">
                <CardTitle className="text-xl font-semibold truncate">{title}</CardTitle>
                <CardDescription className="text-gray-600 truncate">{author}</CardDescription>
            </CardHeader>

            <CardContent className="px-4">
                <p className="text-gray-700">{content}</p>
                <p className="text-lg font-bold mt-2">₹ {price}</p>
            </CardContent>

            <CardFooter className="flex gap-4 justify-center">
                <Button 
                    className="bg-accent text-black hover:bg-primary hover:text-white 
                               px-4 py-2 rounded-md"
                    onClick={onBuyNow}
                >
                    Buy Now
                </Button>
                <Button 
                    className="bg-primary text-white px-4 py-2 rounded-md"
                    onClick={onAddToCart}
                >
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
};

export default BookCard;
