import {cn} from "@/lib/utils";

interface ImageProps {
    src: string;
    placeholder?: string;
    alt?: string;
    className?: string;
    onClick?: () => void;
}

export function Image({className, src, placeholder, alt, onClick}: ImageProps) {
    if (alt) {
        return <img src={src} onClick={onClick ? () => onClick() : undefined} className={className}/>
    }
    return (
        <div
            className={cn( 'bg-center bg-no-repeat bg-cover',className || '',)}
            style={{backgroundImage: `url(${src || placeholder})`}}
            onClick={onClick ? () => onClick() : undefined}
        />
    );
}
