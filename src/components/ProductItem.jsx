import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default ProductItem = (props) => {
  return (
    <View style={styles.Products}>
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/heartVector1.png")}
            style={{ marginLeft: 150, marginTop: 1 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ gap: 1 }}>
        <View style={{ backgroundColor: "white" }}>
          <TouchableOpacity style={styles.ProductsTopContainer}>
            <View>
              <View
                style={{
                  backgroundColor: `${props.product.color}`,
                  width: 84,
                  height: 84,
                  borderRadius: 50,
                }}
              >
                <Image source={props.product.image} style={styles.Image} />
              </View>
              <View style={styles.ProductsDetailsSection}>
                <Text style={styles.ProductPrice}>{props.product.price}</Text>
                <Text style={styles.ProductName}>{props.product.name}</Text>
                <Text style={styles.ProductQuantity}>
                  {props.product.quantity}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ProductsBottomContainer}>
          <View style={styles.ProductsAddToCartSection}>
            <TouchableOpacity style={styles.AddToCartButton}>
              <Image source={require("../assets/addToCartIcon.png")} />
              <Text style={styles.AddToCartText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Products: {
    backgroundColor: "#EBEBEB",
    height: 240,
    width: "47.5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 15,
    marginHorizontal: 5,
  },
  ProductsTopContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "100%",
    justifyContent: "center",
    height: 197,
    paddingBottom: 20,
  },
  Image: {
    position: "relative",
    top: 20,
  },
  ProductsBottomContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#FFF",
    width: "100%",
    height: 42,
  },
  ProductsHeaderSection: {
    height: 40,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  ProductsDetailsSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  ProductPrice: {
    color: "#6CC51D",
  },
  ProductName: {
    fontSize: 15,
    fontWeight: 600,
  },
  ProductQuantity: {
    fontSize: 14,
    fontWeight: 500,
    color: "#868889",
  },
  ProductsAddToCartSection: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    width: "100%",
  },
  AddToCartButton: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  AddToCartText: {
    fontSize: 14,
    fontWeight: 500,
  },
});
