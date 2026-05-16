import { useState } from "react";
import rawData from "../data/data.json";
import PageTitle from "../components/PageTitle";
import type { SpaceTourismData } from "../types/spaceTourism";

const data = rawData as SpaceTourismData;

function Destination() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const destination = data.destinations[activeIndex];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-8 text-center md:px-10 md:pt-10 lg:px-14 lg:pt-20 lg:text-left xl:px-0 ">
      <PageTitle number="01" title="Pick your destination" />

      <div className="mt-8 grid items-end gap-8 md:mt-14 lg:grid-cols-2 lg:gap-28">
        <picture className="mx-auto block w-42.5 md:w-75 lg:w-111.25  animate-[slideFadeIn_600ms_ease-out]">
          <source
            srcSet={destination.images.webp.replace(".", "")}
            type="image/webp"
          />
          <img
            src={destination.images.png.replace(".", "")}
            alt={destination.name}
            className="animate-pulse"
          />
        </picture>

        <div
          key={`destination-content-${activeIndex}`}
          className="mx-auto max-w-111.25 animate-[slideFadeIn_600ms_ease-out] lg:mx-0"
        >
          <div className="flex justify-center gap-7 font-condensed text-sm uppercase tracking-[2.36px] text-space-light md:text-base md:tracking-[2.7px] lg:justify-start ">
            {data.destinations.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`border-b-4 pb-2 uppercase ${
                  activeIndex === index
                    ? "border-white text-white"
                    : "border-transparent hover:border-white/50 animate-[slideFadeIn_600ms_ease-out]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <h2 className="mt-5 font-bellefair text-[56px] uppercase leading-none md:text-[80px] lg:text-[100px] animate-[slideFadeIn_600ms_ease-out]">
            {destination.name}
          </h2>
          <p className="min-h-28 border-b border-white/20 pb-8 text-[15px] leading-7 text-space-light md:text-base md:leading-7 lg:text-lg lg:leading-8 animate-[slideFadeIn_600ms_ease-out]">
            {destination.description}
          </p>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:justify-center lg:justify-start lg:gap-20">
            <div>
              <p className="font-condensed text-sm uppercase tracking-[2.36px] text-space-lightanimate-[slideFadeIn_600ms_ease-out]">
                Avg. distance
              </p>
              <p className="mt-3 font-bellefair text-3xl uppercase">
                {destination.distance}
              </p>
            </div>
            <div>
              <p className="font-condensed text-sm uppercase tracking-[2.36px] text-space-light animate-[slideFadeIn_600ms_ease-out]">
                Est. travel time
              </p>
              <p className="mt-3 font-bellefair text-3xl uppercase animate-[slideFadeIn_600ms_ease-out]">
                {destination.travel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
