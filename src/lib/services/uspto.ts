import axios from 'axios';

export interface Patent {
  id: string;
  title: string;
  abstract: string;
  filingDate: string;
  patentNumber: string;
  inventors: string[];
}

interface PatentResponse {
  patents: USPTOPatent[];
  total_patent_count: number;
}

interface USPTOPatent {
  patent_number: string;
  patent_title: string;
  patent_abstract: string;
  patent_date: string;
}

export class USPTOService {
  private baseUrl = 'https://api.patentsview.org/patents/query'

  async search(query: string, page = 1): Promise<{ patents: Patent[]; total: number }> {
    const response = await axios.post<PatentResponse>(this.baseUrl, {
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
    })
    
    return this.transformResponse(response.data)
  }

  private transformResponse(data: PatentResponse) {
    return {
      patents: data.patents.map((patent: USPTOPatent): Patent => ({
        id: patent.patent_number,
        title: patent.patent_title,
        abstract: patent.patent_abstract,
        filingDate: patent.patent_date,
        patentNumber: patent.patent_number,
        inventors: []
      })),
      total: data.total_patent_count
    }
  }
}
