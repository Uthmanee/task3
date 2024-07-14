import React from "react";
import { Image } from "react-native";

function BottomTabIcon({ color, image, size }) {
  return (
    <Image
      style={{ height: size, width: size }}
      source={image}
      tintColor={color}
    />
  );
}

export default BottomTabIcon;
