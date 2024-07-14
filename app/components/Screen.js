import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import Constants from "expo-constants";

export default function Screen({ backgroundColor = "", children, style }) {
  return (
    <SafeAreaView style={[styles.screen, { backgroundColor }]}>
      <View style={[styles.screenContentArea, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  screenContentArea: {
    flex: 1,
  },
});
