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

export default function ImageCarousel() {
  return (
    <div className="relative w-full h-screen">
      <Carousel  plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      opts={{ loop: true }} className="w-full h-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="relative w-full h-[90vh]">
              <Image
                src={src}
                alt={`Slide ${index}`}
                fill
                className="object-cover  "

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
