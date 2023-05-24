const AppHeader = () => {
  return (
    <header className="text-white flex md:justify-between md:items-center md:py-5 border-b-2 border-[rgba(255,255,255,.1)] sticky top-0 left-0 z-40 bg-[#120601]">
      <div>
        <h1 className="uppercase font-bold text-xl">
          Blossom<span className="text-orange-400">.</span>
        </h1>
      </div>
      <nav className="flex md:items-center md:justify-center gap-6 opacity-80">
        <li className="list-none uppercase text-sm font-semibold">
          <a href="#">Explore</a>
        </li>
        <li className="list-none uppercase text-sm font-semibold">
          <a href="#">Rooms</a>
        </li>
        <li className="list-none uppercase text-sm font-semibold">
          <a href="#">About</a>
        </li>
        <li className="list-none uppercase text-sm font-semibold">
          <a href="#">Activities</a>
        </li>
      </nav>
      <button
        className="border-2 border-[rgba(255,255,255,.7)] py-2 px-6 flex items-center
       justify-center text-sm uppercase"
      >
        Book Now
      </button>
    </header>
  );
};

export default AppHeader;
