import { NextResponse } from 'next/server'
import { USPTOService } from '@/lib/services/uspto'

const usptoService = new USPTOService()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q') || ''
  const page = parseInt(searchParams.get('page') || '1')

  const results = await usptoService.search(query, page)
  return NextResponse.json(results)
}
