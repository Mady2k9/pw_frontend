interface Subject {
  name: string;
  image: string;
  Backcolor: string;
  redirectionUrl: string;
}
interface SchoolClass {
  class: string;
  subjects: Subject[];
}
export interface SchoolDatas {
  classes: SchoolClass[];
  categoryName: string;
}
export interface SchoolData {
  category: SchoolDatas[];
}
