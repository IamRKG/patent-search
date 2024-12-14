'use client'

import { useState } from 'react'
import SearchForm from './SearchForm'
import PatentResults from './PatentResults'
import { Patent } from '@/types/patent'

export default function SearchContainer() {
  const [results, setResults] = useState<Patent[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async (query: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setResults(data.patents)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <SearchForm onSearch={handleSearch} />
      {loading && <div>Searching...</div>}
      <PatentResults patents={results} />
    </div>
  )
}
