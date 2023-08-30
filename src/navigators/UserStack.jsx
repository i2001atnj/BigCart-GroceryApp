import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SearchScreen from "../screens/Search";
import FiltersScreen from "../screens/Filters";
import CategoriesScreen from "../screens/Categories";
import AboutMeScreen from "../screens/AboutMe";
import ProductDetailsScreen from "../screens/ProductDetails";
import CategoryScreen from "../screens/Category";
import ProductsScreen from "../screens/Products";
import MyOrdersScreen from "../screens/MyOrders";
import MyFavoritesScreen from "../screens/MyFavorites";
import MyAddressScreen from "../screens/MyAddress";
import CreditCardsScreen from "../screens/CreditCards";
import TransactionsScreen from "../screens/Transactions";
import NotificationsScreen from "../screens/Notifications";
import AddAddressScreen from "../screens/AddAddress";
import AddCreditCardScreen from "../screens/AddCreditCard";
import HomeStack from "./HomeStack";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About Me"
        component={AboutMeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Details"
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Orders"
        component={MyOrdersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Favorites"
        component={MyFavoritesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Address"
        component={MyAddressScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Credit Cards"
        component={CreditCardsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Address"
        component={AddAddressScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Credit Card"
        component={AddCreditCardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
