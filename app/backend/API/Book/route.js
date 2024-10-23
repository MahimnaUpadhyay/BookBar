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
        const body = await req.json();

        const { data: books, error } = await supabase.from("BookModel").insert(body)

        if (error) {
            return NextResponse.json({ error: 'Error inserting books' }, { status: 404 });
        }
        
        return NextResponse.json({ books }, { status: 200 });
    
    } catch (error) {
        return NextResponse.json({ error: 'Interal Server Error' }, { status: 500 }, { error })
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