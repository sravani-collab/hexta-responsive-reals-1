// Instructions for integrating continuous logo animation in Tailwind CSS:
// Add the following configurations to the `extend` section of your `tailwind.config.js`:
// 1. Keyframes for 'logo-cloud' animation that continuously moves logos from right to left:
//    keyframes: {
//      'logo-cloud': {
//        from: { transform: 'translateX(0)' },
//        to: { transform: 'translateX(calc(-100% - 4rem))' },
//      },
//    }
// 2. Animation utility to apply this keyframe:
//    animation: {
//      'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust duration and timing as needed for your design.
//    }

import { getClientImageUrl } from "@/lib/s3";
// import Image from "next/image";
import BlurImage from "../blur-image";

const logos = [
  {
    name: "Classique",
    url: getClientImageUrl("classique_light.svg"),
    logoDark: getClientImageUrl("classique_dark.svg"),
  },
  {
    name: "Eshani",
    url: getClientImageUrl("eshani_light.svg"),
    logoDark: getClientImageUrl("eshani_dark.svg"),
  },
  {
    name: "Mining Mart",
    url: getClientImageUrl("miningmart_light.svg"),
    logoDark: getClientImageUrl("miningmart_dark.svg"),
  },
  {
    name: "Continental Coffee",
    url: getClientImageUrl("coffee.svg"),
    logoDark: getClientImageUrl("coffee.svg"),
  },
  {
    name: "Vizag Care Ingredients",
    url: getClientImageUrl("vizag-care-ld.png"),
    logoDark: getClientImageUrl("vizag-care-ld.png"),
  },
];
  
  const AnimatedLogoCloud = () => {
    return (
      <div className="w-full py-12 items-center">
          <div className="font-bold text-xl text-center uppercase">Trusted by</div>
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="group relative mt-6 flex gap-6 overflow-hidden p-2"
            // style={{
            //   maskImage:
            //     'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            // }}
          >
            {Array(5)
              .fill(null)
              .map((index) => (
                <div
                  key={index}
                  className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                >
                  {logos.map((logo, key) => (
                    <>
                    <BlurImage
                      key={key}
                      src={logo.url}
                      width={100}
                      height={100}
                      className="h-12 w-64 px-2 block dark:hidden object-contain"
                      alt={`${logo.name}`}
                      />
                    <BlurImage
                      key={key}
                      src={logo.logoDark}
                      width={100}
                      height={100}
                      className="h-12 w-64 px-2 hidden dark:block object-contain"
                      alt={`${logo.name}`}
                      />
                      </>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default AnimatedLogoCloud