import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";

function Order(props) {
  return (
    <Screen style={styles.container}>
      <Text>Order Screen Not Ready</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Order;
