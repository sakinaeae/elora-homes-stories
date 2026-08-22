import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export function ImageCarousel({
  images,
  alt = "Property image",
  className,
  imageClassName,
  priorityFirst = false,
}: {
  images: string[];
  alt?: string;
  className?: string;
  imageClassName?: string;
  priorityFirst?: boolean;
}) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4500); // Autoplay every 4.5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
      }}
      className={cn("w-full group", className)}
    >
      <CarouselContent className="-ml-0">
        {images.map((src, index) => (
          <CarouselItem key={src} className="pl-0 min-w-0 shrink-0 grow-0 basis-full h-full">
            <div className="relative w-full h-full">
              <img
                src={src}
                alt={`${alt} - ${index + 1}`}
                loading={priorityFirst && index === 0 ? "eager" : "lazy"}
                className={cn("w-full h-full object-cover object-[50%_80%]", imageClassName)}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
        <CarouselPrevious className="relative inset-auto pointer-events-auto bg-ivory/80 hover:bg-ivory text-forest border-none shadow-md backdrop-blur-sm" />
        <CarouselNext className="relative inset-auto pointer-events-auto bg-ivory/80 hover:bg-ivory text-forest border-none shadow-md backdrop-blur-sm" />
      </div>
    </Carousel>
  );
}
