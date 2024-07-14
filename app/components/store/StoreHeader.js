import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CartContext from "../../context/cartContext";
import colors from "../../config/colors";
import routes from "../../navigation/routes";
import RowContainer from "../RowContainer";
import SearchBarDummy from "../SearchBarDummy";

function StoreHeader(props) {
  const navigation = useNavigation();

  const cartCtx = useContext(CartContext);

  return (
    <RowContainer style={styles.container}>
      <SearchBarDummy />
      <Image
        style={styles.notificationIcon}
        source={require("../../assets/notification.png")}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.CART)}
        style={styles.cartImageContainer}
      >
        <View style={styles.badge}>
          <Text style={styles.text}>{cartCtx.totalQuantity}</Text>
        </View>
        <Image
          style={styles.cartIcon}
          source={require("../../assets/cart-fill.png")}
        />
      </TouchableOpacity>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: colors.primary,
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: "center",
    height: 16,
    position: "absolute",
    right: -1,
    top: -1,
    width: 16,
  },
  cartImageContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 6,
    height: 44,
    justifyContent: "center",
    width: 44,
  },
  cartIcon: {
    height: 22,
    width: 22,
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 20,
  },
  notificationIcon: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 11,
  },
});

export default StoreHeader;
