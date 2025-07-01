import React from 'react';

const DebugPage = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Debug Environment Variables</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="font-semibold">Environment Variables:</h2>
          <p><strong>VITE_SUPABASE_URL:</strong> {import.meta.env.VITE_SUPABASE_URL || 'NOT SET'}</p>
          <p><strong>VITE_SUPABASE_ANON_KEY:</strong> {import.meta.env.VITE_SUPABASE_ANON_KEY ? 'SET (hidden)' : 'NOT SET'}</p>
          <p><strong>MODE:</strong> {import.meta.env.MODE}</p>
          <p><strong>DEV:</strong> {import.meta.env.DEV ? 'true' : 'false'}</p>
          <p><strong>PROD:</strong> {import.meta.env.PROD ? 'true' : 'false'}</p>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="font-semibold">Current Values in Supabase Client:</h2>
          <p><strong>URL:</strong> https://qgwarskhyzgucxqruzbv.supabase.co</p>
          <p><strong>Key:</strong> eyJhbGciOiJIUzI1NiIs... (truncated)</p>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="font-semibold">All Environment Variables:</h2>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(import.meta.env, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default DebugPage;
