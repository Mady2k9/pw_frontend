interface Subject {
  name: string;
  image: string;
  Backcolor: string;
}
interface SchoolClass {
  class: string;
  subjects: Subject[];
}
interface SchoolData {
  classes: SchoolClass[];
}
