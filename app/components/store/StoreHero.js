import React from "react";
import { ImageBackground, StyleSheet, Text } from "react-native";
import colors from "../../config/colors";

function StoreHero(props) {
  return (
    <ImageBackground
      style={styles.hero}
      source={require("../../assets/hero.png")}
    >
      <Text style={styles.text}>2024/25 JERSEY ARRIVAL</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {},
  hero: {
    alignItems: "center",
    height: 138,
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
    width: 360,
  },
  text: {
    color: colors.primaryText,
    fontSize: 26,
    fontWeight: "700",
  },
});

export default StoreHero;
