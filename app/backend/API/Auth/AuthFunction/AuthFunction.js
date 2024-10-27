import { supabase } from "../supabase/supabase";

export async function signUp(email, password, name) {
    try {
        const { error, data } = await supabase.auth.signUp(
            {
                email,
                password
            }, {
            name
        }
        )

        if (error) {
            console.log("There is an error ", error)
        } else {
            console.log("This is user data ", data);
            return data;
        }
    } catch (error) {
        console.log("Error while creating User: ", error)
    }
}

export async function signIn(email, password) {
    try {
        const { error, data } = await supabase.auth.signInWithPassword(
            {
                email,
                password
            }
        )

        if (!email) {
            console.log("Email doesn't exist");
        } else if (error) {
            console.log("There is an error ", error)
        } else {
            console.log("The logined in User ", data);
            return data;
        }
    } catch (error) {
        console.log("Error while Login ", error)
    }
}

export async function signOut() {
    try {
        const { error } = await supabase.auth.signOut();

        if (error) {
            console.log("There is an error ", error)
        }
    } catch (error) {
        console.log("Error while sign out ", error)
    }
}