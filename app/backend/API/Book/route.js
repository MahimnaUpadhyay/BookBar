import Database_Config from "../../DATABASE/Database_Config";
import { NextResponse } from "next/server";

const supabase = Database_Config();

export async function GET(req) {
    try {
        const { data: books, error } = await supabase.from("BookModel").select();

        if (error) {
            console.error('Error fetching books:', error);
            return NextResponse.json({ error: 'Error fetching books' }, { status: 404 });
        }
        
        return NextResponse.json({ books }, { status: 200 });

    } catch (error) {
        console.log('There has been an error while getting books:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const formData = await req.formData();

        const BookName = formData.get("BookName");
        const BookAuthor = formData.get("BookAuthor");
        const BookSummary = formData.get("BookSummary");
        const BookPrice = formData.get("BookPrice");
        const BookImage = formData.get("BookImage");

        if (!BookImage) {
            return NextResponse.json(
                { error: "No file uploaded" }, 
                { status: 400 }
            );
        }

        const filename = `${Date.now()}_${BookImage.name}`;

        const arrayBuffer = await BookImage.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);


        const { data: image, error: imageError } = await supabase.storage
            .from("BookImage")
            .upload(filename, buffer, {
                public: false,
                contentType: BookImage.type,
                upsert: false
            });

        if (imageError) {
            console.error("Image upload error:", imageError);
            return NextResponse.json(
                { error: "Error uploading book image" },
                { status: 500 }
            );
        }

        const imageUrl = `${process.env.DB_URL}/storage/v1/object/public/BookImage/${filename}`;

        const { data: books, error: dbError } = await supabase
            .from("BookModel")
            .insert({ BookName, BookAuthor, image_url: imageUrl, BookPrice, BookSummary });

        if (dbError) {
            console.error("Database insertion error:", dbError);
            return NextResponse.json(
                { error: "Error inserting book details" },
                { status: 500 }
            );
        }

        return NextResponse.json({ books }, { status: 200 });

    } catch (error) {
        console.error("Internal server error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}


export async function PUT(req) {
    try {
        const body = await req.json();
        const id = body.id;

        const { data, error } = await supabase.from("BookModel").update({ BookName: body.BookName }).eq('id', id).select();

        if (error) {
            console.log(error);
            return NextResponse.json({ error: 'Error updating book' }, { status: 404 })
        } 

        return NextResponse.json({ data }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}

export async function DELETE(req) {
    try {
        const body = await req.json();
        const id = body.id;

        const { data, error } = await supabase.from("BookModel").delete().eq('id', id);

        if (error) {
            console.log(error);
            return NextResponse.json({error: 'Error deleting book'},{status: 404})
        } 
        
        return NextResponse.json({data}, {status: 200});

    } catch (error) {
        console.log(error);
        return NextResponse.json({error: 'Interal Server error'},{status: 500})
    }
}