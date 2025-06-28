export interface FindAllMeta {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export interface FindAllResponse<I> {
  data: I[];
  meta: FindAllMeta;
}
