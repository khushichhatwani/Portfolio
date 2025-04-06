"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import { Button } from "./ui/MovingBorders";

const RecentProjects = () => {
  return (
    <section className="py-20" id="#projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
      {projects.map((item) => (
  <Button
    key={item.id}
    duration={Math.floor(Math.random() * 10000) + 10000}
    borderRadius="1.75rem"
    style={{
      background: "rgb(4,7,29)",
      backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      borderRadius: `calc(1.75rem * 0.96)`,
    }}
    className="sm:w-96 w-[80vw] lg:min-h-[32.5rem] h-[25rem] text-black dark:text-white border-neutral-200 dark:border-slate-800 flex items-center justify-center"
  >
    <Link href={item.link}>
      <PinContainer
        title={item.link}
        href={item.link}
      >
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <img src="/bg.png" alt="bgimg" />
          </div>
          <img
            src={item.img}
            alt="cover"
            className="z-10 absolute bottom-0"
          />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{item.title}</h1>
        <p className="text-sm opacity-60 mt-2 ">{item.des}</p>
      </PinContainer>
    </Link>
  </Button>
))}
      </div>
    </section>
  );
};

export default RecentProjects;