import {
  DynamicIllustration,
  MobileIllustration,
} from '@components/illustrations';
import LinkCard from '@components/LinkCard';
import Navigation from '@components/Navigation';
import { guysFavs, yamusFavs } from '@data/favourites';
import { selectFavourites } from '@slices/favourites';
import { useSelector } from 'react-redux';

const Home = () => {
  const favourites = useSelector(selectFavourites);

  return (
    <div className="grainy bg-custom-bg relative min-h-screen">
      <Navigation currentPage="home" />
      <MobileIllustration />
      <DynamicIllustration />

      <main className="relative z-10 mx-auto h-screen max-w-7xl overflow-y-auto px-6 py-8 md:h-auto md:overflow-visible">
        <div className="space-y-12">
          {/* User's Favorites Section */}
          {favourites.length > 0 && (
            <section>
              <div className="mb-6 flex items-center space-x-2">
                <h2 className="font-heading text-text-900 text-base font-medium">
                  Your Favorites
                </h2>
                <span className="font-heading bg-primary-100 text-text-500 rounded-full px-1.5 py-0.5 text-base">
                  {favourites.length}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {favourites.map((item) => (
                  <LinkCard key={item.id} link={item} />
                ))}
              </div>
            </section>
          )}

          {/* Yamu's Favs Section */}
          <section>
            <h2 className="font-heading text-text-900 mb-6 text-base font-medium">
              Yamu&apos;s Favs
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {yamusFavs.map((item) => (
                <LinkCard key={item.id} link={item} />
              ))}
            </div>
          </section>

          {/* Guy's Favs Section */}
          <section>
            <h2 className="font-heading text-text-900 mb-6 text-base font-medium">
              Guy&apos;s Favs
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
