export interface Patent {
  id: string;
  title: string;
  abstract: string;
  inventors: string[];
  filingDate: string;
  patentNumber: string;
}

export interface SearchParams {
  query: string;
  page: number;
  limit: number;
}
