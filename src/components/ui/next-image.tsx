import Image, { ImageProps } from 'next/image'

export interface NextImageProps extends ImageProps {
  alt: string
}

export default function NextImage({ alt, ...props }: NextImageProps){
  return <Image  alt={alt} {...props}/>
}
