import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import { Image } from "@/components/ui/image";

export default function WhyChooseUs({whyChooseData}:any) {
    return <div className={'card-shadow rounded-lg p-4 flex flex-col gap-4 md:gap-6'} id={'Why-Choose-Us'}>
        <h2 className={'text-xl md:text-3xl font-bold'}>Why Choose Us</h2>
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full relative"
        >
            <CarouselContent>
                {whyChooseData.map((data: { imageId: { baseUrl: string; key: string; }; }, index:number) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-[40%]">
                        <Image src={data?.imageId?.baseUrl + data?.imageId?.key} className="h-full w-full bg-cover bg-center" alt="why choose us image" />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className={'absolute right-0 bottom-0 top-0 w-[100px] bg-gradient-to-r from-transparent to-white'}/>
            <CarouselPrevious className={'left-2 bg-white hover:bg-white'}/>
            <CarouselNext className={'right-2 bg-white hover:bg-white'}/>
        </Carousel>
    </div>
}
