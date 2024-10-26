import Database_Config from "@/app/backend/DATABASE/Database_Config";
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

const supabase = Database_Config();

export async function POST(request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { message: "All fields (email, password) are required." },
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

        if (users.length === 0) { 
            return NextResponse.json(
                { message: "User does not exist." },
                { status: 404 }
            );
        }

        const CorrectPassword = await bcrypt.compare(password, users[0].password);

        if (!CorrectPassword) {
            return NextResponse.json(
                { message: "Wrong Credentials" },
                { status: 401 }
            );
        } 

        return NextResponse.json(
            { message: "Welcome User!" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json(
            { message: "There was an error during login.", error },
            { status: 500 }
        );
    }
}
