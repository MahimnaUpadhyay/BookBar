import Database_Config from "../../DATABASE/Database_Config";
import { NextResponse } from "next/server";

const supabase = Database_Config();

export async function PUT(req) {
    try {
        const body = await req.json();

        const { data, error } = await supabase.from("PaymentModel").insert(body);

        if (error) {
            console.log(error);
            return NextResponse.json({ error: 'Error adding order' }, { status: 404 })
        } 

        return NextResponse.json({ data }, { status: 200 });

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
