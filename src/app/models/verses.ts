export interface Versiculos {
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  id: string;
  orgId: string;
  bookId: string;
  chapterId: string;
  bibleId: string;
  reference: string;
}
