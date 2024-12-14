import axios from 'axios'

export class USPTOService {
  private baseUrl = 'https://api.patentsview.org/patents/query'

  async search(query: string, page = 1) {
    const response = await axios.post(this.baseUrl, {
      q: {
        "_text_any": { 
          "patent_title": query
        }
      },
      f: ["patent_number", "patent_title", "patent_abstract", "patent_date"],
      o: {
        "page": page,
        "per_page": 10
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    return this.transformResponse(response.data)
  }

  private transformResponse(data: any) {
    return {
      patents: data.patents.map((patent: any) => ({
        id: patent.patent_number,
        title: patent.patent_title,
        abstract: patent.patent_abstract,
        filingDate: patent.patent_date,
        patentNumber: patent.patent_number
      })),
      total: data.total_patent_count
    }
  }
}