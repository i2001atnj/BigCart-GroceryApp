import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import { PRODUCTS } from "../../data/products";
import ProductItem from "../../components/ProductItem";
import Header from "../../components/Header";

const ProductsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", alignItems: "center" }}>
      <Header
        returnArrow
        title="Products"
        titleStyle={{ marginRight: "40%" }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  ListContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
    marginTop: 15,
    backgroundColor: "#F4F5F9",
    paddingVertical: 20,
  },
});
