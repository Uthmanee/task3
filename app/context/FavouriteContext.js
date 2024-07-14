import React, { createContext, useState, useEffect } from "react";

const FavouriteContext = createContext({
  favourite: [],
  toggleFavouriteItem: () => {},
  removeFromFavourite: () => {},
  totalQuantity: 0,
});

export const FavoriteContextProvider = ({ children }) => {
  const [favourite, setFavourite] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const quantity = favourite.reduce((acc, item) => acc + item.quantity, 0);

    setTotalQuantity(quantity);
  }, [favourite]);

  const toggleFavouriteItem = (item) => {
    setFavourite((prevFav) => {
      const existingItemIndex = prevFav.findIndex(
        (favItem) => favItem.id === item.id
      );

      if (existingItemIndex === -1) {
        return [...prevFav, item];
      } else {
        return prevFav.filter((_, index) => index !== existingItemIndex);
      }
    });
  };

  const removeFromFavourite = (itemId) => {
    setFavourite((prevFav) => prevFav.filter((item) => item.id !== itemId));
  };

  const value = {
    favourite,
    toggleFavouriteItem,
    removeFromFavourite,
    totalQuantity,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;
