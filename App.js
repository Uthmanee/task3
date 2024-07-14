import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { CartContextProvider } from "./app/context/cartContext";
import { FavoriteContextProvider } from "./app/context/FavouriteContext";

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default () => (
  <FavoriteContextProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </FavoriteContextProvider>
);
