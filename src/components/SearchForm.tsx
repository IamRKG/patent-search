'use client';

import { useState } from 'react';

export default function SearchForm({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Search patents..."
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Search Patents
      </button>
    </form>
  );
}
