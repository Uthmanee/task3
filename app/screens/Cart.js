import React, { useContext } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CartContext from "../context/cartContext";
import CartItem from "../components/CartItem";
import colors from "../config/colors";
import CouponBox from "../components/CouponBox";
import jerseys from "../data/jerseys";
import NavBar from "../components/NavBar";
import RowContainer from "../components/RowContainer";
import routes from "../navigation/routes";
import Screen from "../components/Screen";

function Cart(props) {
  const navigation = useNavigation();

  const cartCtx = useContext(CartContext);

  const renderFooter = () => (
    <>
      <Text style={styles.summary}>Order Summary</Text>
      <RowContainer style={styles.footerRowContainer}>
        <Text style={styles.text}>Items</Text>
        <Text style={styles.text}>{cartCtx.totalQuantity}</Text>
      </RowContainer>
      <RowContainer style={styles.footerRowContainer}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>N 5000</Text>
      </RowContainer>
      <RowContainer style={styles.footerRowContainer}>
        <Text style={styles.text}>Services</Text>
        <Text style={styles.text}>N 3500</Text>
      </RowContainer>
      <CouponBox />
      <RowContainer style={styles.footerRowContainer}>
        <View>
          <Text>Sub Total</Text>
          <Text style={styles.subTotalFigure}>
            N
            {cartCtx.totalPrice > 0
              ? +cartCtx.totalPrice - 5000 - 3500
              : "######"}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate(routes.CHECKOUT)}
          style={styles.checkoutButton}
        >
          <Text style={{ color: "#fff", fontWeight: "500" }}>
            Proceed to Cheeckout
          </Text>
        </TouchableOpacity>
      </RowContainer>
    </>
  );
  return (
    <Screen style={styles.screen}>
      <NavBar style={styles.navBar} screenName="Cart" />
      <RowContainer style={styles.totalQuantityContainer}>
        <Text style={styles.totalQuantity}>
          {cartCtx.totalQuantity} Item{cartCtx?.totalQuantity > 1 ? "s" : null}
        </Text>
      </RowContainer>
      <FlatList
        data={cartCtx.cart}
        keyExtractor={(jeresey) => jeresey.id.toString()}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => <CartItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  checkoutButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 13,
  },
  footerRowContainer: {
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
  },
  navBar: {
    marginBottom: 0,
  },
  screen: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  summary: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  totalQuantity: {
    fontSize: 16,
    marginBottom: 20,
  },
  totalQuantityContainer: {
    justifyContent: "flex-end",
  },
  subTotalFigure: {
    color: colors.primaryText,
    fontSize: 16,
    fontWeight: "600",
  },
});

export default Cart;
