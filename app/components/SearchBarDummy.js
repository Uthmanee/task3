import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import RowContainer from "./RowContainer";

function SearchBarDummy({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <RowContainer style={styles.container}>
        <Text style={styles.text}>Search for anything</Text>
        <Feather style={styles.icon} name="search" size={20} color="black" />
      </RowContainer>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "#000000B2",
    borderRadius: 7,
    borderWidth: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 40,
  },
  text: {
    color: "#00000080 border",
    flexGrow: 1,
    fontSize: 15,
  },
});

export default SearchBarDummy;
