export default function BatchDescriptionCardWrapper({children, className, title}: {
    children: React.ReactNode;
    className?: string;
    title: string
}): JSX.Element {
    return (
        <div className={`card-shadow rounded-lg p-4 pt-6 flex flex-col  gap-4 md:gap-6 ${className}`}>
            <h2 className={'text-xl md:text-3xl font-bold'}>{title}</h2>
            {children}
        </div>
    );
}
