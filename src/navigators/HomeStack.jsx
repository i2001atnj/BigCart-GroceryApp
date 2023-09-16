import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  HomeScreen,
  UserSettingsScreen,
  FavoritesScreen,
  CartScreen,
} from "../screens/home/index";
import {
  homeVector,
  homeVector2,
  user,
  user2,
  favorites,
  favorites2,
  shoppingCartVector,
} from "../assets/icons/index";

const Tab = createBottomTabNavigator();

export default function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home Screen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let tabIcon;
          if (route.name === "Home Screen") {
            tabIcon = focused ? homeVector : homeVector2;
          }
          if (route.name === "User Settings Screen") {
            tabIcon = focused ? user : user2;
          }
          if (route.name === "Favorites Screen") {
            tabIcon = focused ? favorites2 : favorites;
          }
          if (route.name === "Cart Screen") {
            tabIcon = focused ? shoppingCartVector : shoppingCartVector;
          }
          return <Image source={tabIcon} />;
        },
        headerShown: false,
        headerBackground: "#FFFFFF",
      })}
    >
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="User Settings Screen"
        component={UserSettingsScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Favorites Screen"
        component={FavoritesScreen}
        options={{ tabBarShowLabel: false }}
      />
      <Tab.Screen
        name="Cart Screen"
        component={CartScreen}
        options={{ tabBarShowLabel: false }}
      />
    </Tab.Navigator>
  );
}
