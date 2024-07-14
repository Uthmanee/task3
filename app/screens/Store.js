import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import JerseyCard from "../components/JerseyCard";
import Screen from "../components/Screen";
import StoreHeader from "../components/store/StoreHeader";
import HorizontalPadding from "../components/HorizontalPadding";
import ListHeader from "../components/ListHeader";
import more from "../data/more";
import newArrivals from "../data/newArrivals";
import StoreHero from "../components/store/StoreHero";
import Section from "../components/Section";
import TopSellers from "./TopSellers";
import routes from "../navigation/routes";

function Store(props) {
  const navigation = useNavigation();

  const renderHeader = () => (
    <>
      <HorizontalPadding>
        <StoreHeader />
      </HorizontalPadding>
      <StoreHero />
      <Section
        buttonText="See more"
        data={newArrivals}
        heading="New Arrivals"
      />
      <Section buttonText="See more" data={TopSellers} heading="Top Sellers" />
      <HorizontalPadding>
        <ListHeader
          heading="More of what you like"
          buttonText="See more"
          onPress={() => navigation.navigate(routes.FULLLIST, more)}
        />
      </HorizontalPadding>
    </>
  );

  const renderFooter = () => (
    <>
      <HorizontalPadding>
        <FlatList
          data={more}
          keyExtractor={(jeresey) => jeresey.id.toString()}
          renderItem={({ item }) => <JerseyCard dimension={156} item={item} />}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </HorizontalPadding>
    </>
  );

  return (
    <Screen style={styles.screen}>
      <FlatList
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 20,
  },
});

export default Store;
