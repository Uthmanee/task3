import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

function Decrease({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Entypo name="minus" size={14} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 20,
    backgroundColor: "#0000003D",
    height: 20,
    justifyContent: "center",
    width: 20,
  },
});

export default Decrease;
