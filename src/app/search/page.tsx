import { searchPatents } from '../actions'
import PatentResults from '@/components/PatentResults'


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function SearchPage(props: { 
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const q = (searchParams.q as string) || ''
  const page = (searchParams.page as string) || '1'
  const currentPage = parseInt(page)
  const results = await searchPatents(q, currentPage)

  return (
    <main className="container mx-auto px-4 py-8">
      <PatentResults patents={results.patents} />
    </main>
  )
}
