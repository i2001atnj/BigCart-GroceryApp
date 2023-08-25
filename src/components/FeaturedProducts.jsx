import React from "react";
import { View, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";
import { DATA } from "../mocks/data";
import SectionRedirect from "./SectionRedirect";

export default function FeaturedProducts() {
  return (
    <View style={{ gap: 10 }}>
      <SectionRedirect title="Featured products" />
      <View style={styles.ListContainer}>
        {DATA.map((product) => (
          <ProductItem
            color={product.color}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            name={product.name}
            key={product.id}
            type={product.type}
            discount={product.discount}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
