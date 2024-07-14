import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import ApplyButton from "./ApplyButton";
import RowContainer from "./RowContainer";

function CouponBox(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Do you have a Coupon Code?</Text>
      <RowContainer style={styles.rowContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Enter Coupon Code" />
        </View>
        <ApplyButton />
      </RowContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#0000003D",
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  inputContainer: {
    borderColor: "#00000080",
    borderRadius: 6,
    borderWidth: 1,
    flexGrow: 1,
    marginRight: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  rowContainer: {
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CouponBox;
