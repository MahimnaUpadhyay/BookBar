import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const Database_Config = () => {
    try {

        const DB_URL = process.env.DB_URL;
        const DB_SERVICE_KEY = process.env.DB_SERVICE_KEY;

        const supabase = createClient(DB_URL, DB_SERVICE_KEY);

        if (!supabase) {
            console.log("Error in url or key");
        } else {
            console.log("SupaBase connected successfully");
            return supabase;
        }
    } catch (error) {
        console.log("There has been an error in Database Connection", error);
    }
}

export default Database_Config;