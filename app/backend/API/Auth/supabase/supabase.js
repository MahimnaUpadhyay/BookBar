import { createClient } from "@supabase/supabase-js";

const DB_URL = process.env.DB_URL;
const DB_API_KEY = process.env.DB_API_KEY;

export const supabase = createClient(DB_URL, DB_API_KEY);