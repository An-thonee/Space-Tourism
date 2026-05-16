import { useState } from "react";
import rawData from "../data/data.json";
import PageTitle from "../components/PageTitle";
import type { SpaceTourismData } from "../types/spaceTourism";

const data = rawData as SpaceTourismData;

function Technology() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tech = data.technology[activeIndex];

  return (
    <section className="overflow-hidden pb-14 pt-8 text-center md:pt-10 lg:pb-0 lg:pt-20 lg:text-left">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14 xl:px-0">
        <PageTitle number="03" title="Space launch 101" />
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl items-center gap-8 md:mt-14 lg:grid-cols-[auto_1fr_auto] lg:gap-20 lg:pl-14 xl:pl-0 animate-[slideFadeIn_600ms_ease-out]">
        <picture className="order-1 block lg:order-3 ">
          <source
            media="(min-width: 1024px)"
            srcSet={tech.images.portrait.replace(".", "")}
          />
          <img
            src={tech.images.landscape.replace(".", "")}
            alt={tech.name}
            className="h-42.5 w-full object-cover md:h-77.5 lg:h-131.75 lg:w-128.75"
          />
        </picture>

        <div className="order-2 flex justify-center gap-4 lg:order-1 lg:flex-col lg:gap-8 ">
          {data.technology.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`grid h-10 w-10 place-items-center rounded-full border font-bellefair text-base transition md:h-15 md:w-15 md:text-2xl lg:h-20 lg:w-20 lg:text-3xl ${
                activeIndex === index
                  ? "border-white bg-white text-space-dark"
                  : "border-white/25 text-white hover:border-white"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div
          key={`technology-content-${activeIndex}`}
          className="order-3 mx-auto max-w-115 animate-[slideFadeIn_600ms_ease-out] px-6 lg:order-2 lg:mx-0 lg:px-0"
        >
          <p className="font-condensed text-sm uppercase tracking-[2.36px] text-space-light md:text-base md:tracking-[2.7px]">
            The terminology...
          </p>
          <h2 className="mt-3 font-bellefair text-2xl uppercase md:text-[40px] lg:text-[56px] lg:leading-tight">
            {tech.name}
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-space-light md:text-base md:leading-7 lg:text-lg lg:leading-8">
            {tech.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Technology;
