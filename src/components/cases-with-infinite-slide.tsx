"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getClientImageUrl } from "@/lib/s3";
import Image from "next/image";

// Client categories and data with light/dark variants
const clientCategories = [
  {
    name: "Classique",
    logoLight: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    logoLight: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    logoLight: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    logoLight: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
  {
    name: "Vizag Care Ingredients",
    logoLight: getClientImageUrl("vizag-care-ld.png"),
    logoDark: getClientImageUrl("vizag-care-ld.png"),
  },
  {
    name: "Classique",
    logoLight: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    logoLight: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    logoLight: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    logoLight: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
  {
    name: "Classique",
    logoLight: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    logoLight: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    logoLight: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    logoLight: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
  {
    name: "Vizag Care Ingredients",
    logoLight: getClientImageUrl("vizag-care-ld.png"),
    logoDark: getClientImageUrl("vizag-care-ld.png"),
  },
  {
    name: "Classique",
    logoLight: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    logoLight: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    logoLight: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    logoLight: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
  {
    name: "Classique",
    logoLight: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    logoLight: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    logoLight: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    logoLight: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
  {
    name: "Vizag Care Ingredients",
    logoLight: getClientImageUrl("vizag-care-ld.png"),
    logoDark: getClientImageUrl("vizag-care-ld.png"),
  },
  {
    name: "Classique",
    logoLight: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    logoLight: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    logoLight: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    logoLight: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
  {
    name: "Classique",
    logoLight: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    logoLight: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    logoLight: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    logoLight: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
  {
    name: "Vizag Care Ingredients",
    logoLight: getClientImageUrl("vizag-care-ld.png"),
    logoDark: getClientImageUrl("vizag-care-ld.png"),
  },
  {
    name: "Classique",
    logoLight: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    logoLight: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    logoLight: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    logoLight: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
];

function Case() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-30">
      <div className="container mx-auto">
        <div className="flex flex-col  gap-10">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {clientCategories.map((client, clientIndex) => (
                <CarouselItem className="basis-1/2 lg:basis-1/6" key={clientIndex}>
                  <div
                    key={clientIndex}
                    className="flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 h-32"
                  >
                    {/* Light mode image - hidden in dark mode */}
                    <div className="relative h-full w-full block dark:hidden">
                      <Image
                        src={client.logoLight}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Dark mode image - hidden in light mode */}
                    <div className="relative h-full w-full hidden dark:block">
                      <Image
                        src={client.logoDark}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
