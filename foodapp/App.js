import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import COLORS from "./src/consts/colors";

import DetailsScreen from "./src/views/screens/DetailsScreen";
import BottomNavigator from "./src/views/navigation/BottomNavigator";
import OnBoardScreen from "./src/views/screens/OnBoardScreen";
import IngredientScreen from "./src/views/screens/IngredientScreen";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import Details from "./src/views/screens/Details";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="IngredientScreen" component={IngredientScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
