import HeroBanner from "../assets/hero_banner.jpg";
import HeroCards from "./HeroCards";

const AppHero = () => {
  return (
    <>
      <section>
        <div
          className="mt-16 w-full h-[450px]  relative opacity-90"
          style={{
            backgroundImage: `url(${HeroBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="font-black uppercase text-white text-7xl text-center -translate-y-[40px] z-10 drop-shadow-lg">
            stay with comfort
          </h1>
          <button className="uppercase absolute bottom-0 left-0 bg-[#ff4400e5] font-semibold text-white text-sm py-3 px-6">
            find rooms for a stay
          </button>
        </div>
        <HeroCards />
      </section>
    </>
  );
};

export default AppHero;
