export interface Capitulos {
  data?: (DataEntity)[] | null;
}
export interface DataEntity {
  id: string;
  bibleId: string;
  bookId: string;
  number: string;
  reference: string;
}
