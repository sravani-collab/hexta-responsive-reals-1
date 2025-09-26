"use client";
// import { useRouter } from "next/navigation";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Link from "next/link";

export default function LayoutGridDemo() {
  // const router = useRouter();
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
       DevSecOps Services
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our DevSecOps services integrate security practices into the DevOps
        process, ensuring that security is a shared responsibility throughout
        the software development lifecycle.
      </p>
      <Link href="/services/devsecops">Read More </Link>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        IT Staffing Solutions
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Finding the right IT talent can be challenging. Our IT staffing
        solutions connect you with skilled professionals who meet your specific
        requirements, ensuring your projects are staffed with the best in the
        industry.
      </p>
      <Link href="/services/it-staffing">Read More </Link>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        IT Consulting Services
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our IT consulting services help you navigate the complexities of
        technology and make informed decisions that drive your business
        forward.
      </p>
      <Link href="/services/it-consulting">Read More </Link>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Web and Mobile App Development
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our web and mobile app development services create seamless digital
        experiences that engage users and drive business growth.
      </p>
      <Link href="/services/web-and-mobile-app-development">Read More </Link>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/services/it/devsecops-1.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/services/it/mobile-app-dev.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/services/it/devsecops.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
