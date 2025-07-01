// Test script to verify environment variables
console.log('Environment Variables Test:');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'SET' : 'NOT SET');
console.log('Mode:', import.meta.env.MODE);
console.log('All env:', import.meta.env);
