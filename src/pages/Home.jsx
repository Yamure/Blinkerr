import LinkCard from "@components/LinkCard";
import Navigation from "@components/Navigation";
import { useSelector } from "react-redux";
import { selectFavourites } from "@/store/favouritesSlice";
import { yamusFavs, guysFavs } from "@/data/favourites";
import {
  DynamicIllustration,
  MobileIllustration,
} from "@components/illustrations";

const Home = () => {
  const favourites = useSelector(selectFavourites);

  return (
    <div className="min-h-screen grainy bg-custom-bg relative">
      <Navigation currentPage="home" />
      <MobileIllustration />
      <DynamicIllustration />

      <main className="max-w-7xl mx-auto px-6 py-8 relative z-10 h-screen overflow-y-auto md:h-auto md:overflow-visible">
        <div className="space-y-12">
          {/* User's Favorites Section */}
          {favourites.length > 0 && (
            <section>
              <div className="flex items-center space-x-2 mb-6">
                <h2 className="text-base font-medium font-heading text-text-900">
                  Your Favorites
                </h2>
                <span className="text-base font-heading bg-primary-100 px-1.5 py-0.5 rounded-full text-text-500">
                  {favourites.length}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favourites.map((item) => (
                  <LinkCard key={item.id} link={item} />
                ))}
              </div>
            </section>
          )}

          {/* Yamu's Favs Section */}
          <section>
            <h2 className="mb-6 text-base font-medium font-heading text-text-900">
              Yamu&apos;s Favs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {yamusFavs.map((item) => (
                <LinkCard key={item.id} link={item} />
              ))}
            </div>
          </section>

          {/* Guy's Favs Section */}
          <section>
            <h2 className="mb-6 text-base font-medium font-heading text-text-900">
              Guy&apos;s Favs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {guysFavs.map((item) => (
                <LinkCard key={item.id} link={item} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
