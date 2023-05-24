import AppHeader from "./components/AppHeader";
import AppHero from "./components/AppHero";

const App = () => {
  return (
    <main className="w-full max-w-[1045px] md:px-6 mx-auto">
      <AppHeader />
      <AppHero />
    </main>
  );
};

export default App;
