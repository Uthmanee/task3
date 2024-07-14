import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import RowContainer from "./RowContainer";

function NavBar({ screenName = "", style }) {
  const navigation = useNavigation();

  return (
    <RowContainer style={[styles.container, style]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={18} color="black" />
      </TouchableOpacity>
      <Text style={styles.text}>{screenName}</Text>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "auto",
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 30,
  },
});

export default NavBar;
