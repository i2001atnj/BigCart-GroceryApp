import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ProductItem from "./ProductItem";
import { DATA } from "../mocks/data";

export default function FeaturedProducts() {
  return (
    <View style={styles.FeaturedProducts}>
      <TouchableOpacity style={styles.Header}>
        <View>
          <Text style={styles.Title}>Featured products</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.ListContainer}>
        {DATA.map((product) => (
          <ProductItem
            color={product.color}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
            name={product.name}
            key={product.id}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FeaturedProducts: {
    gap: 10,
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 50,
  },
  Title: {
    fontWeight: 600,
    fontSize: 18,
  },
  ListContainer: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  ProductsList: {
    display: "flex",
    flexDirection: "column",
  },
});
