import React from "react";
import { StyleSheet, Text } from "react-native";

import Decrease from "./Decrease";
import Increase from "./Increase";
import RowContainer from "../RowContainer";

function QuantityChange({ decreaseQuantity, increaseQuantity, quantity }) {
  return (
    <RowContainer style={styles.container}>
      <Decrease onPress={decreaseQuantity} />
      <Text style={styles.quantity}>{quantity}</Text>
      <Increase onPress={increaseQuantity} />
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 74,
  },
  quantity: {
    fontSize: 18,
    height: 24,
    marginHorizontal: 7,
  },
});

export default QuantityChange;
