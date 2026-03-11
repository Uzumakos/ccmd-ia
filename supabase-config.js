// ============================================================
// CCMD Supabase Configuration
// Shared by quiz-day1.html, quiz-day2.html, quiz-day3.html,
// and admin-dashboard.html
// ============================================================

const SUPABASE_URL = 'https://kcgukyqtliodcpotaqeg.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtjZ3VreXF0bGlvZGNwb3RhcWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk1NDI3MjYsImV4cCI6MjA4NTExODcyNn0.sYroxqbA4K6cVR970zWkm-3ZWwt0fkLNRxZaJpN-jnA';

// Initialize the Supabase client (loaded from CDN in each HTML file)
function createSupabaseClient() {
  return supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}
