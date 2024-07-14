import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";

function Account(props) {
  return (
    <Screen style={styles.container}>
      <Text>Account Screen Not Ready</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Account;
