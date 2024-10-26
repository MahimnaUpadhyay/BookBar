import Database_Config from "@/app/backend/DATABASE/Database_Config";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

const supabase = Database_Config();

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "All fields (name, email, password) are required." },
                { status: 400 }
            );
        }

        const { data: users, error: findError } = await supabase
            .from("UserModel")
            .select("*")
            .eq("email", email);

        if (findError) {
            console.error("Database query error:", findError.message);
            return NextResponse.json(
                { message: "Error checking user existence.", error: findError.message },
                { status: 500 }
            );
        }

        if (users.length > 0) {
            return NextResponse.json(
                { message: "User already exists." },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)
        const newUser = { name, email, password: hashedPassword };

        const { data: user, error: insertError } = await supabase
            .from("UserModel")
            .insert(newUser)
            .select("*")
            .single();

        if (insertError) {
            console.error("Insert Error:", insertError.message);
            return NextResponse.json(
                { message: "Error while creating user.", error: insertError.message },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "User created successfully.", user },
            { status: 201 }
        );

    } catch (error) {
        console.error("Unexpected Error:", error);

        if (error instanceof TypeError && error.message.includes('fetch failed')) {
            return NextResponse.json(
                { message: "Failed to connect to the database. Please try again later." },
                { status: 503 }
            );
        }

        return NextResponse.json(
            { message: "An unexpected error occurred.", error: error.message },
            { status: 500 }
        );
    }
}
