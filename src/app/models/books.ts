export interface Books {
  data?: (DataEntity)[] | any;
}
export interface DataEntity {
  id: string;
  bibleId: string;
  abbreviation: string;
  name: string;
  nameLong: string;
}
