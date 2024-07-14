import React from "react";
import { StyleSheet, Text } from "react-native";

import ButtonText from "./ButtonText";
import RowContainer from "./RowContainer";

function ListHeader({ heading, buttonText, onPress }) {
  return (
    <RowContainer style={styles.container}>
      <Text style={styles.text}>{heading}</Text>
      <ButtonText onPress={onPress} buttonText={buttonText}>
        {buttonText}
      </ButtonText>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ListHeader;
