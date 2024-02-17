import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

const items = [{
    title: 'Quality Education',
    description: 'We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.'
}, {
    title: 'Quality Education',
    description: 'We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.'
}, {
    title: 'Quality Education',
    description: 'We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.'
}, {
    title: 'Quality Education',
    description: 'We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.'
}, {
    title: 'Quality Education',
    description: 'We understand that every student has different needs and capabilities, which is why we create such a wonderful and unique curriculum that is the best fit for every student.'
}]
export default function WhyChooseUs() {
    return <div className={'card-shadow rounded-lg p-4 flex flex-col gap-4 md:gap-6'} id={'Why-Choose-Us'}>
        <h2 className={'text-xl md:text-3xl font-bold'}>Why Choose Us</h2>
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full relative"
        >
            <CarouselContent>
                {items.map((_, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-[40%]">
                        <div className={'p-4 bg-amber-100 rounded-lg flex flex-col gap-2 border border-amber-300'}>
                            <div className={'w-12 h-12 rounded-full bg-zinc-50'}/>
                            <h3 className={'font-semibold whitespace-nowrap mt-1'}>{_.title}</h3>
                            <p className={'text-lighter text-sm'}>{_.description}</p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className={'absolute right-0 bottom-0 top-0 w-[100px] bg-gradient-to-r from-transparent to-white'}/>
            <CarouselPrevious className={'left-2 bg-white hover:bg-white'}/>
            <CarouselNext className={'right-2 bg-white hover:bg-white'}/>
        </Carousel>
    </div>
}
