import Bloom from '../../../../assets/Images/Schools/Bloom.webp';
import Next from '../../../../assets/Images/Schools/Next.webp';
import spark from '../../../../assets/Images/Schools/spark.webp';

export const AccessStateData = {
  schoolCardData: [
    {
      sectionTitle: "Our Series",
      sectionProps: [
        {
          title: "Bloom",
          description: "Our Most premium innovative and NEP-compliant curriculum.",
          mwebImage: `${Bloom.src}`,
          dwebImage: `${Bloom.src}`,
          TopTitle: "For K-8 Grades",
          bgColor: "#AE60B5"
        },
        {
          title: "EuNext",
          description: "Our affordable, updated and NCERT aligned books.",
          mwebImage:`${Next.src}`,
          dwebImage: `${Next.src}`,
          bgColor: "#E86309",
          TopTitle: "For K-8 Grades"
        },
        {
          title: "SPARK",
          description: "Our Skill/Tech Curriculum on coding, AI/ML and other skill based subjects.",
          mwebImage: `${spark.src}`,
          dwebImage: `${spark.src}`,
          bgColor: "#037CBF",
          TopTitle: "For 6-10 Grades"
        }
      ]
    }
  ]
}
