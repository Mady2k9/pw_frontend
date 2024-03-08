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
          description: "Our Publishing Partner for classes Nursery till 2nd",
          mwebImage: `${Bloom.src}`,
          dwebImage: `${Bloom.src}`,
          TopTitle: "For K-2 Grade",
          bgColor: "#AE60B5"
        },
        {
          title: "euNext",
          description: "Our Publishing Partner for classes Nursery till 8th",
          mwebImage:`${Next.src}`,
          dwebImage: `${Next.src}`,
          bgColor: "#E86309",
          TopTitle: "For K-8 Grade"
        },
        {
          title: "Spark",
          description: "Our Publishing Partner for classes Class 8th till 10th",
          mwebImage: `${spark.src}`,
          dwebImage: `${spark.src}`,
          bgColor: "#037CBF",
          TopTitle: "For Class 8-10"
        }
      ]
    }
  ]
}
