import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/colors";

function ApplyButton({ onPress = () => {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>Apply</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.primary,
    borderRadius: 6,
    borderWidth: 1,
    paddingVertical: 9,
    paddingHorizontal: 15,
  },
  text: {
    color: colors.primaryText,
  },
});

export default ApplyButton;
