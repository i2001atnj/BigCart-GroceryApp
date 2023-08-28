import React from "react";
import { View, StyleSheet } from "react-native";
import ProductItem from "./ProductItem";
import SectionRedirect from "./SectionRedirect";
import { DATA } from "../mocks/data";

export default function FeaturedProducts() {
  return (
    <View style={styles.Container}>
      <SectionRedirect title="Featured products" screen="" />
      <View style={styles.ListContainer}>
        {DATA.map((item) => (
          <ProductItem
            color={item.color}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            name={item.name}
            key={item.id}
            date={item.date}
            state={item.state}
            type={item.type}
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
