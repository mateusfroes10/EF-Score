const SUPABASE_URL = "https://vzmmwvkkuqvafhhszagg.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_-e5aNWcNSrqdyejKh3U6UQ_fmliK77j";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);
