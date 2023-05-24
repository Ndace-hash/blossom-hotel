import IconHeart from "./icons/IconHeart";
import IconSpa from "./icons/IconSpa";
import IconArrowRight from "./icons/IconArrowRight";

const HeroCards = () => {
  return (
    <section className="flex items-start justify-between z-50 mt-6 mb-12">
      <article className="h-[200px]  w-[200px] bg-green-300 flex justify-center flex-col px-4">
        <span className="uppercase text-xl font-bold text-[#120601]">
          Destination.
        </span>
        <span className="uppercase text-xl font-bold text-[#120601]">
          Luxury.
        </span>
        <span className="uppercase text-xl font-bold text-[#120601]">
          Respite.
        </span>
      </article>
      <article className="h-[200px]  w-[200px] bg-pink-200 flex justify-center flex-col gap-4 px-4">
        <span className="uppercase text-2xl font-bold text-[#120601]">
          <IconHeart />
        </span>
        <span className="uppercase text-sm font-bold text-[#120601]">
          it&apos;s your own,plan big show
        </span>
        <span className=" text-xs font-semibold text-[#120601]">
          We love orchestrating your wedding events.
        </span>
      </article>
      <article className="h-[200px]  w-[200px] bg-yellow-100 flex justify-center flex-col gap-4 px-4">
        <span className="uppercase text-2xl font-bold text-[#120601]">
          <IconSpa />
        </span>
        <span className="uppercase text-sm font-bold text-[#120601]">
          try our exhilirating spa & gym
        </span>
        <span className=" text-xs font-semibold text-[#120601]">
          Experience world greatest relaxation on earth!
        </span>
      </article>
      <article className="h-[255px]  w-[200px] bg-yellow-400 flex gap-3 justify-center flex-col px-4 -translate-y-[55px]">
        <span className="uppercase text-xl font-bold text-[#120601]">
          2k23 Fall travel guide
        </span>
        <span className="text-sm font-semibold text-[#120601]">
          The autumn follage in full display, it&apos;s the perfect time to hit
          the road.
        </span>
        <button className="uppercase flex items-center text-xs border-[#120601] border-2 py-3 px-3 font-semibold text-[#120601] gap-2">
          view online guide
          <IconArrowRight />
        </button>
      </article>
    </section>
  );
};

export default HeroCards;
