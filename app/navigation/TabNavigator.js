import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Account from "../screens/Account";
import BottomTabIcon from "./BottomTabIcon";
import Liked from "../screens/Liked";
import Order from "../screens/Order";
import routes from "./routes";
import Store from "../screens/Store";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.STORE}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Store"
        component={Store}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BottomTabIcon
              size={size}
              color={color}
              image={require("../assets/storeIcon.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BottomTabIcon
              size={size}
              color={color}
              image={require("../assets/orderIcon.png")}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BottomTabIcon
              size={size}
              color={color}
              image={require("../assets/accountIcon.png")}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
