import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import HorizontalPadding from "./HorizontalPadding";
import JerseyCard from "./JerseyCard";
import LeftPadding from "./LeftPadding";
import ListHeader from "./ListHeader";
import routes from "../navigation/routes";

function Section({ buttonText, data, heading }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <HorizontalPadding>
        <ListHeader
          heading={heading}
          buttonText={buttonText}
          onPress={() => {
            navigation.navigate(routes.FULLLIST, data);
          }}
        />
      </HorizontalPadding>
      <LeftPadding>
        <FlatList
          data={data}
          keyExtractor={(jeresey) => jeresey.id.toString()}
          renderItem={({ item }) => (
            <JerseyCard dimension={136} item={item} horizontalItem={true} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </LeftPadding>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
});

export default Section;
