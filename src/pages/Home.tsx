import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-7xl flex-col items-center justify-center gap-20 px-6 pb-12 pt-12 text-center md:min-h-[calc(100vh-96px)] md:px-20 md:pt-24 lg:min-h-[calc(100vh-136px)] lg:flex-row lg:items-end lg:justify-between lg:px-14 lg:pb-32 lg:text-left xl:px-0">
      <div className="max-w-135 animate-[slideFadeIn_600ms_ease-out]">
        <p className="font-condensed text-base uppercase tracking-[2.7px] text-space-light md:text-xl md:tracking-[3.36px] lg:text-3xl lg:tracking-[4.72px]">
          So, you want to travel to
        </p>
        <h1 className="mt-6 font-bellefair text-[80px] uppercase leading-none md:text-[150px]">
          Space
        </h1>
        <p className="mx-auto mt-6 max-w-112.5 text-[15px] leading-7 text-space-light md:text-base md:leading-7 lg:mx-0 lg:text-lg lg:leading-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <Link
        to="/destination"
        className="grid h-36 w-36 place-items-center rounded-full bg-white font-bellefair text-xl uppercase tracking-[1.25px] text-space-dark outline-0 outline-white/10 transition-all duration-300 hover:outline-44 md:h-60 md:w-60 md:text-3xl md:tracking-[2px] lg:h-68 lg:w-68"
      >
        Explore
      </Link>
    </section>
  );
}

export default Home;
