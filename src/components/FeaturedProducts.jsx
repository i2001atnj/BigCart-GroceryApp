import React from "react";
import { View, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";
import SectionRedirect from "./SectionRedirect";
import { PRODUCTS } from "../data/products";

export default function FeaturedProducts() {
  return (
    <View style={styles.Container}>
      <SectionRedirect title="Featured products" screen="Products Screen" />
      <View style={styles.ListContainer}>
        {PRODUCTS.map((product) => (
          <ProductItem
            color={product.color}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            name={product.name}
            key={product.id}
            date={product.date}
            state={product.state}
            type={product.type}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    marginVertical: 20,
    paddingHorizontal: 17,
  },
  ListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 15,
  },
});
