import { SafeAreaView, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import Header from "../../components/Header";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import EmptyCartInfo from "../../components/EmptyCartInfo";
import { PRODUCTS } from "../../data/products";
import ProductSlider from "../../components/ProductSlider";

export default function CartScreen() {
  const navigation = useNavigation();
  const [cart, setCart] = useState([]);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header style={{ justifyContent: "center" }} title="Shopping Cart" />
      {!cart ? (
        <View style={{ height: "80%" }}>
          <EmptyCartInfo text="Your cart is empty !" />
          <ButtonComponent
            text="Start shopping"
            buttonFunction={() => navigation.navigate("Home Screen")}
            style={{ paddingHorizontal: 17 }}
          />
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.ItemsContainer}
        >
          {PRODUCTS.map((product) => (
            <ProductSlider
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              quantity={product.quantity}
              color={product.color}
              state={product.state}
              category={product.category}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ItemsContainer: {
    backgroundColor: "#F4F5F9",
    padding: 15,
  },
});
