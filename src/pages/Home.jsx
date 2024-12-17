import LinkCard from "@components/LinkCard";
import Navigation from "@components/Navigation";
import { useSelector } from "react-redux";
import { selectFavorites } from "@/store/favoritesSlice";
import { Coffee, ChaoticGood, Pilot, Plants, MechanicalLove } from "@assets";
import { yamusFavs, guysFavs } from "@/data/favorites";

const Home = () => {
  const favorites = useSelector(selectFavorites);
  console.log("yamusFavs:", yamusFavs); // Debug log
  console.log("guysFavs:", guysFavs); // Debug log
  console.log("favorites:", favorites); // Debug log

  return (
    <div className="min-h-screen grainy bg-custom-bg relative">
      <Navigation currentPage="home" />

      {/* Decorative SVGs */}
      <img
        src={Pilot}
        alt="Pilot illustration"
        className="fixed top-1/6 right-8 w-20 h-20 opacity-30 pointer-events-none transform scale-x-[-1]"
      />
      <img
        src={Plants}
        alt="Plants illustration"
        className="fixed top-1/4 left-8 w-16 h-16 opacity-30 pointer-events-none"
      />

      <main className="max-w-7xl mx-auto px-6 py-8 z-10">
        {/* User's Favorites Section */}
        {favorites.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center space-x-2 mb-6">
              <h2 className="text-sm font-medium text-zinc-900">
                Your Favorites
              </h2>
              <span className="text-xs bg-zinc-100 px-1.5 py-0.5 rounded-full text-zinc-500">
                {favorites.length}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((item) => (
                <LinkCard key={item.id} link={item} />
              ))}
            </div>
          </section>
        )}

        {/* Corner and Middle Illustrations */}
        <img
          src={Coffee}
          alt="Coffee illustration"
          className="fixed bottom-1/6 right-8 w-24 h-24 opacity-50 pointer-events-none transform scale-x-[-1]"
        />
        <img
          src={ChaoticGood}
          alt="Chaotic Good illustration"
          className="fixed bottom-1/6 left-8 w-24 h-24 opacity-50 pointer-events-none"
        />
        <img
          src={MechanicalLove}
          alt="Mechanical Love illustration"
          className="fixed top-1/3 right-12 w-20 h-20 opacity-30 pointer-events-none"
        />

        {/* Yamu's Favs Section */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-zinc-900 mb-6">
            Yamu&apos;s Favs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {yamusFavs.map((item) => (
              <LinkCard key={item.id} link={item} />
            ))}
          </div>
        </section>

        {/* Guy's Favs Section */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-zinc-900 mb-6">
            Guy&apos;s Favs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {guysFavs.map((item) => (
              <LinkCard key={item.id} link={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
