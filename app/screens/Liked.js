import React, { useContext } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import FavouriteContext from "../context/FavouriteContext";
import CartItem from "../components/CartItem";
import NavBar from "../components/NavBar";
import RowContainer from "../components/RowContainer";
import Screen from "../components/Screen";

function Liked(props) {
  const favCtx = useContext(FavouriteContext);

  return (
    <Screen style={styles.screen}>
      <NavBar style={styles.navBar} screenName="Liked" />
      <RowContainer style={styles.totalQuantityContainer}>
        <Text style={styles.totalQuantity}>
          {favCtx?.totalQuantity} Item{favCtx?.totalQuantity > 1 ? "s" : null}
        </Text>
      </RowContainer>
      <FlatList
        data={favCtx.favourite}
        keyExtractor={(jeresey) => jeresey.id.toString()}
        renderItem={({ item }) => <CartItem item={item} data="fav" />}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  navBar: {
    marginBottom: 0,
  },
  screen: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  totalQuantity: {
    fontSize: 16,
    marginBottom: 20,
  },
  totalQuantityContainer: {
    justifyContent: "flex-end",
  },
});

export default Liked;
