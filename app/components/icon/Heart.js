import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";

function Heart({ liked, size = null, toggleLiked }) {
  return (
    <TouchableOpacity
      onPress={() => toggleLiked()}
      style={[
        styles.container,
        { backgroundColor: liked ? colors.primary : "#fff" },
        size != null && { height: size?.dimension, width: size?.dimension },
      ]}
    >
      <AntDesign
        name="hearto"
        size={size?.size ? size?.size : 16}
        color={liked ? "#fff" : "#00000080"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
    height: 30,
    width: 30,
  },
});

export default Heart;
