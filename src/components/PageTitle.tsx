import type { PageTitleProps } from "../types/spaceTourism";

function PageTitle({ number, title }: PageTitleProps) {
  return (
    <h1 className="font-condensed text-base uppercase tracking-[2.7px] text-white md:text-left md:text-xl md:tracking-[3.36px] lg:text-3xl lg:tracking-[4.72px]">
      <span className="mr-4 font-bold text-white/25">{number}</span>
      {title}
    </h1>
  );
}

export default PageTitle;
