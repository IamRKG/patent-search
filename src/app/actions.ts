'use server'

import { USPTOService } from '@/lib/services/uspto'

export async function searchPatents(query: string, page: number) {
  const usptoService = new USPTOService()
  return usptoService.search(query, page)
}
