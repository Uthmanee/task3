import React from "react";
import { FlatList, StyleSheet } from "react-native";

import JerseyCard from "../components/JerseyCard";
import NavBar from "../components/NavBar";
import Screen from "../components/Screen";

function FullList({ route }) {
  const jerseys = route.params;

  return (
    <Screen style={styles.screen}>
      <NavBar screenName="New Arrival" />
      <FlatList
        data={jerseys}
        keyExtractor={(jeresey) => jeresey.id.toString()}
        renderItem={({ item }) => (
          <JerseyCard dimension={156} item={item} fullList />
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});

export default FullList;
