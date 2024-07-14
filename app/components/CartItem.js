import React, { useContext } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import CartContext from "../context/cartContext";
import colors from "../config/colors";
import FavouriteContext from "../context/FavouriteContext";
import QuantityChange from "./quantity/QuantityChange";
import RowContainer from "./RowContainer";
import useQuantity from "../hooks/useQuantity";

function CartItem({ item, data = "" }) {
  const [state, increaseQuantity, decreaseQuantity] = useQuantity(
    {
      price: item.price,
      quantity: item.quantity,
    },
    5
  );

  const cartCtx = useContext(CartContext);
  const favCtx = useContext(FavouriteContext);

  const handleIncreaseQty = () => {
    if (state.quantity < 5) {
      cartCtx.addToCart(
        {
          ...item,
          price: state.price,
          quantity: state.quantity,
        },
        "cartIncrease"
      );
      increaseQuantity();
    }
  };

  const handledecreaseQty = () => {
    state.quantity > 1 &&
      cartCtx.addToCart(
        {
          ...item,
          price: state.price,
          quantity: state.quantity,
        },
        "cartDecrease"
      );
    decreaseQuantity();
  };

  return (
    <RowContainer style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.body}>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>N {state.price}</Text>
          <RowContainer>
            <Text style={styles.size}>M</Text>
            <QuantityChange
              increaseQuantity={handleIncreaseQty}
              decreaseQuantity={handledecreaseQty}
              quantity={state.quantity}
            />
          </RowContainer>
        </View>
        <TouchableOpacity
          onPress={() =>
            data === "fav"
              ? favCtx.removeFromFavourite(item.id)
              : cartCtx.removeFromCart(item.id)
          }
        >
          <RowContainer style={styles.bodyFooter}>
            <Image
              style={styles.deleteIcon}
              source={require("../assets/delete.png")}
            />
            <Text style={styles.remove}>Remove</Text>
          </RowContainer>
        </TouchableOpacity>
      </View>
    </RowContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "space-between",
    padding: 7,
    paddingTop: 2,
  },
  bodyFooter: {
    alignItems: "center",
    justifyContent: "auto",
  },
  container: {
    justifyContent: "auto",
    marginBottom: 20,
    width: "100%",
  },
  deleteIcon: {
    height: 13,
    marginRight: 5,
    width: 12,
  },
  image: {
    borderRadius: 6,
    height: 120,
    width: 120,
  },
  name: {
    fontSize: 14,
  },
  price: {
    color: colors.primaryText,
    fontWeight: "600",
  },
  remove: {
    color: "#00000066",
  },
  size: {
    color: "#000000CC",
  },
});

export default CartItem;
