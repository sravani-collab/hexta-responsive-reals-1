import { cn } from "@/lib/utils"
import Image from "next/image"

export default function DroneSection() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
      <div className="absolute inset-0 object-cover">
        <Image
          alt="clouds background"
          src="/images/field.png"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute top-[19rem] -right-14 w-[19rem] sm:top-[12rem] sm:right-3 sm:w-[23rem] md:top-[12rem] md:right-0 md:w-[25rem] lg:top-[16rem] lg:right-12 lg:w-[34rem]">
        <Image
          alt="clouds background"
          src="/images/drone.png"
          width={1583}
          height={554}
          className={cn("animate-hover")}
        />
      </div>
      <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
        <div className="">
          <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-gray-900 md:text-2xl lg:text-3xl">
            <p className="before:absolute before:top-0 before:right-full before:content-['“'] after:text-gray-900/70 after:content-['”']">
              <strong className="font-semibold">
              Experience precision like never before.
              </strong>{" "}
              <span className="text-gray-900/70">
              Our drone solutions offer high-resolution inspections, real-time monitoring, and safer site evaluations—designed to elevate your engineering and environmental insights.
              </span>
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
