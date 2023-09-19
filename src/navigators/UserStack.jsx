import { createStackNavigator } from "@react-navigation/stack";
import {
  SearchScreen,
  FiltersScreen,
  CategoriesScreen,
  AboutMeScreen,
  ProductDetailsScreen,
  CategoryScreen,
  ProductsScreen,
  MyOrdersScreen,
  MyFavoritesScreen,
  MyAddressScreen,
  CreditCardsScreen,
  TransactionsScreen,
  NotificationsScreen,
  AddAddressScreen,
  AddCreditCardScreen,
} from "../screens/user/index";
import HomeStack from "./HomeStack";

const Stack = createStackNavigator();

export default function UserStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search Screen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Filters Screen"
        component={FiltersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories Screen"
        component={CategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About Me Screen"
        component={AboutMeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Details Screen"
        component={ProductDetailsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Category Screen"
        component={CategoryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Products Screen"
        component={ProductsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Orders Screen"
        component={MyOrdersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Favorites Screen"
        component={MyFavoritesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="My Address Screen"
        component={MyAddressScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Credit Cards Screen"
        component={CreditCardsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Transactions Screen"
        component={TransactionsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notifications Screen"
        component={NotificationsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Address Screen"
        component={AddAddressScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Credit Card Screen"
        component={AddCreditCardScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
