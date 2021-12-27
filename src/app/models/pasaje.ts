export interface Passages {
  data: Data;
  meta: Meta;
}
export interface Data {
  id: string;
  orgId: string;
  bibleId: string;
  bookId: string;
  chapterIds?: (string)[] | null;
  reference: string;
  content: string;
  verseCount: number;
  copyright: string;
}
export interface Meta {
  fums: string;
  fumsId: string;
  fumsJsInclude: string;
  fumsJs: string;
  fumsNoScript: string;
}
