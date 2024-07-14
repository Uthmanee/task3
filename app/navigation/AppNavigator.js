import { createStackNavigator } from "@react-navigation/stack";

import Cart from "../screens/Cart";
import Checkout from "../screens/Checkout";
import FullList from "../screens/FullList";
import routes from "./routes";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"Bottom Tab"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Bottom Tab" component={TabNavigator} />
      <Stack.Screen name={routes.CART} component={Cart} />
      <Stack.Screen name={routes.FULLLIST} component={FullList} />
      <Stack.Screen name={routes.CHECKOUT} component={Checkout} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
