import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import colors from "../../config/colors";

function Cart({ isInCart, size = null, toggleCart }) {
  return (
    <TouchableOpacity
      onPress={() => toggleCart()}
      style={[
        styles.container,
        { backgroundColor: isInCart ? colors.primary : "#fff" },
        size != null && { height: size?.dimension, width: size?.dimension },
      ]}
    >
      <AntDesign
        name="shoppingcart"
        size={size?.size ? size?.size : 16}
        color={isInCart ? "#fff" : "#00000080"}
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

export default Cart;
