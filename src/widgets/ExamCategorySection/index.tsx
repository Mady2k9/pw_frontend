import ExamCategoryCard, {ExamCategoryProps} from "./ExamCategoryCard";
import TestPassCard from "@/widgets/TestPassCard";

interface ExamCategorySectionProps {
    title?: string;
    description?: string;
    categories?: ExamCategoryProps[]
}

export default function ExamCategorySection({title, description, categories}: ExamCategorySectionProps) {
    return (
        <div className={'container py-4  md:py-8'}>
            {title && <h2 className={'text-xl md:text-4xl font-bold text-center '}>{title}</h2>}
            {description &&
                <p className={'text-center text-sm font-medium md:text-lg text-light max-w-3xl mx-auto mt-3'}>{description}</p>}
            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10'}>
                {
                    categories?.map((category, index) => (
                        <ExamCategoryCard key={index} {...category} slug={index + ''}/>
                    ))
                }
            </div>
        </div>
    )
}
