import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (link) => {
    setFavorites(prev => {
      const exists = prev.find(fav => fav.id === link.id);
      if (exists) {
        return prev.filter(fav => fav.id !== link.id);
      }
      return [...prev, link];
    });
  };

  const isFavorite = (linkId) => {
    return favorites.some(fav => fav.id === linkId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

FavoritesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useFavorites = () => useContext(FavoritesContext);
