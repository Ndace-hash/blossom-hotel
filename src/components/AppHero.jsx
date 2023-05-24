import HeroBanner from "../assets/hero_banner.jpg";

const AppHero = () => {
  return (
    <section>
      <div className="w-full  relative flex justify-center">
        <h1 className="font-black uppercase text-white text-7xl translate-y-[25px] z-10">
          stay with comfort
        </h1>
        <div className="mt-16 w-full h-[450px] overflow-hidden absolute opacity-90">
          <img
            src={HeroBanner}
            alt="banner - house with a pool"
            className="w-full h-full object-cover "
          />
          <button className="uppercase absolute bottom-0 left-0 bg-[#ff4400e5] font-semibold text-white text-sm py-3 px-6">
            find rooms for a stay
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppHero;
