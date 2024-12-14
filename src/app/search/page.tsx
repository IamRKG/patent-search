import { searchPatents } from '../actions'
import PatentResults from '@/components/PatentResults'
import SearchForm from '@/components/SearchForm'

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  // Destructure with default values
  const { q = '', page = '1' } = await Promise.resolve(searchParams)
  const currentPage = parseInt(page)
  const results = await searchPatents(q, currentPage)

  return (
    <main className="container mx-auto px-4 py-8">
      <SearchForm />
      <PatentResults patents={results.patents} />
    </main>
  )
}
