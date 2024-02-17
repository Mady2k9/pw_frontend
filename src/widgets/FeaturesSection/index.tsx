interface FeatureItemProps {
    icon?: string;
    title: string;
    description?: string;
}

interface ExamCategorySectionProps {
    title?: string;
    description?: string;
    features?: FeatureItemProps[]
}

export default function FeaturesSection({title, description, features}: ExamCategorySectionProps) {
    return (
        <div className={'container py-4 animationFromBottom md:py-8'}>
            {title && <h2 className={'text-xl md:text-4xl font-bold text-center '}>{title}</h2>}
            {description &&
                <p className={'text-center text-sm md:text-lg font-medium text-light max-w-3xl mx-auto mt-3'}>{description}</p>}
            <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-6 md:mt-10'}>
                {
                    features?.map((feature, index) => (
                        <div key={index}
                             className={'flex flex-col items-center text-center space-y-2 bg-indigo-50 rounded px-4 py-6 md:py-8'}>
                            <div className={'w-14 h-14 bg-gray-200 rounded-md mb-2 md:mb-4'}/>
                            <h3 className={'text-lg md:text-xl font-semibold'}>{feature.title}</h3>
                            <h3 className={'font-medium text-light'}>{feature.description}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
