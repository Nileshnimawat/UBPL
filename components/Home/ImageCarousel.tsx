'use client';
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../src/components/ui/carousel';

const images : string[] = [
  '/carousel/slide1.jpg',
  '/carousel/slide3.jpg',
];
import { useMediaQuery } from 'react-responsive';

export default function ImageCarousel() {
   const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="relative w-full h-auto sm:h-[60vh] md:h-[80vh] lg:h-screen">
      <Carousel  plugins={[
        Autoplay({
          delay: 4000,
        }),
        
      ]}
      opts={{ 
          loop: true,
          duration: isMobile ? 20 : 40 // Smoother transition on mobile
        }}  className="w-full ">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover h-full "
                 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
}
