import React from "react";
import { StyleSheet, View } from "react-native";

function LeftPadding({ children, style }) {
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
});

export default LeftPadding;
