import React, { useContext, useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Cart from "./icon/Cart";
import CartContext from "../context/cartContext";
import colors from "../config/colors";
import FavouriteContext from "../context/FavouriteContext";
import RowContainer from "./RowContainer";
import Heart from "./icon/Heart";

function JerseyCard({
  item,
  dimension,
  fullList = false,
  horizontalItem = false,
}) {
  const [horizontal, setHorizontal] = useState(false);

  const cartCtx = useContext(CartContext);
  const favCtx = useContext(FavouriteContext);

  const cartItemIds = cartCtx.cart.map((item) => item.id);
  const isInCart = cartItemIds.includes(item.id);

  const favItemIds = favCtx.favourite.map((item) => item.id);
  const liked = favItemIds.includes(item.id);

  useEffect(() => {
    horizontalItem && setHorizontal(true);
  }, []);

  const handleToggleCart = () => {
    cartCtx.toggleCartItem(item);
  };

  const handleToggleLiked = () => {
    favCtx.toggleFavouriteItem(item);
  };

  return (
    <TouchableOpacity disabled={true} style={styles.container(horizontal)}>
      <ImageBackground
        style={[
          styles.backgroundImage(horizontal),
          { height: dimension, width: dimension },
        ]}
        source={{ uri: item.image }}
      >
        <RowContainer style={styles.rowContainer}>
          <Heart
            liked={liked}
            size={horizontal ? { dimension: 29, size: 15 } : null}
            toggleLiked={handleToggleLiked}
          />
          <Cart
            isInCart={isInCart}
            size={horizontal ? { dimension: 29, size: 15 } : null}
            toggleCart={handleToggleCart}
          />
        </RowContainer>
      </ImageBackground>
      {!fullList && <Text style={styles.price}>{item.price}</Text>}
      {fullList && (
        <RowContainer>
          <Text style={styles.price}>{item.price}</Text>
          <Text>
            <Text style={styles.rating}>5 </Text>
            <AntDesign name="star" size={14} color="#FCD538" />
          </Text>
        </RowContainer>
      )}
      <Text
        style={styles.name(horizontal)}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.name}
      </Text>
      {!fullList && (
        <Text>
          <Text style={styles.rating}>5 </Text>
          <AntDesign name="star" size={14} color="#FCD538" />
        </Text>
      )}
      {fullList && <Text style={{ color: "#00000099" }}>Men's Jersey</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backgroundImage: (horizontal = false) => ({
    borderRadius: 6,
    justifyContent: "flex-end",
    padding: horizontal ? 6 : 7,
    paddingRight: horizontal ? 5 : 6,
    overflow: "hidden",
  }),
  container: (horizontal = false) => ({
    marginBottom: 10,
    marginRight: horizontal ? 5 : 0,
  }),
  name: (horizontal = false) => ({
    width: horizontal ? 130 : 150,
  }),
  price: {
    color: colors.primaryText,
    fontWeight: "400",
  },
  rating: {},
  rowContainer: {
    justifyContent: "space-between",
  },
});

export default JerseyCard;
