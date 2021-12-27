export interface Bibles {
  data?: (DataEntity)[] | any;
}
export interface DataEntity {
  id: string;
  dblId: string;
  relatedDbl?: any;
  name: string;
  nameLocal: string;
  abbreviation: string;
  abbreviationLocal: string;
  description?: string | any;
  descriptionLocal?: string | any;
  language: Language;
  countries?: (CountriesEntity)[] | any;
  type: string;
  updatedAt: string;
  audioBibles?: (AudioBiblesEntity | any)[] | any;
}
export interface Language {
  id: string;
  name: string;
  nameLocal: string;
  script: string;
  scriptDirection: string;
}
export interface CountriesEntity {
  id: string;
  name: string;
  nameLocal: string;
}
export interface AudioBiblesEntity {
  id: string;
  name: string;
  nameLocal: string;
  dblId: string;
}
