export interface AdvancedSearchParams {
  query: string;
  fields: {
    title?: string;
    abstract?: string;
    claims?: string;
    description?: string;
    inventors?: string[];
    assignee?: string;
    patentNumber?: string;
    applicationNumber?: string;
    filingDate?: string;
  };
  sort: 'relevance' | 'date' | 'title';
  limit: number;
  page: number;
}
