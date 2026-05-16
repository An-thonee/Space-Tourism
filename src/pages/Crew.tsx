import { useState } from "react";
import rawData from "../data/data.json";
import PageTitle from "../components/PageTitle";
import type { SpaceTourismData } from "../types/spaceTourism";

const data = rawData as SpaceTourismData;

function Crew() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const member = data.crew[activeIndex];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-0 pt-8 text-center md:px-10 md:pt-10 lg:px-14 lg:pt-20 lg:text-left xl:px-0">
      <PageTitle number="02" title="Meet your crew" />

      <div
        key={`crew-content-${activeIndex}`}
        className="grid min-h-[calc(100vh-180px)] items-end gap-8 md:gap-0 lg:grid-cols-[1fr_0.9fr] animate-[slideFadeIn_600ms_ease-out]"
      >
        <div className="order-2 flex flex-col md:order-1 md:items-center lg:items-start">
          <div className="order-2 md:order-1">
            <p className="font-bellefair text-base uppercase text-white/50 md:text-2xl lg:text-4xl">
              {member.role}
            </p>
            <h2 className="mt-2 font-bellefair text-2xl uppercase md:text-[40px] lg:mt-4 lg:text-[56px] lg:leading-tight">
              {member.name}
            </h2>
            <p className="mx-auto mt-4 max-w-130 text-[15px] leading-7 text-space-light md:text-base md:leading-7 lg:mx-0 lg:max-w-111.25 lg:text-lg lg:leading-8">
              {member.bio}
            </p>
          </div>

          <div className="order-1 mb-8 flex justify-center gap-4 md:order-2 md:mb-0 md:mt-10 lg:mt-28 lg:justify-start animate-[slideFadeIn_600ms_ease-out]">
            {data.crew.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show ${item.name}`}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full lg:h-4 lg:w-4 ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="order-1 mx-auto flex w-full max-w-81.75 justify-center border-b border-white/20 md:order-2 md:max-w-114 md:border-b-0 lg:max-w-none">
          <picture>
            <source
              srcSet={member.images.webp.replace(".", "")}
              type="image/webp"
            />
            <img
              src={member.images.png.replace(".", "")}
              alt={member.name}
              className="max-h-55.75 object-contain md:max-h-130 lg:max-h-162.5"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Crew;
