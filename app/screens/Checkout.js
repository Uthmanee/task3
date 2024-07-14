import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";

function Checkout(props) {
  return (
    <Screen style={styles.container}>
      <Text>Checkout Screen Not Ready</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Checkout;
