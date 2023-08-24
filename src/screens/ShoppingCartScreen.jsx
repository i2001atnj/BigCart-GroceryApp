import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import { RedirectButton } from "../components/components";
import { shoppingCartPageVector } from "../assets/assets";

export default function ShoppingCart() {
  return (
    <SafeAreaView style={styles.ShoppingCart}>
      <View style={styles.CartInfoContainer}>
        <Image source={shoppingCartPageVector} />
        <Text
          style={{
            fontSize: 22,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          Your cart is empty !
        </Text>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 500,
            color: "#868889",
            width: 235,
            textAlign: "center",
          }}
        >
          You will get a response within a few minutes.
        </Text>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 17 }}>
        <RedirectButton text="Start shopping" screen="Home" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ShoppingCart: {
    backgroundColor: "#F4F5F9",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  CartInfoContainer: {
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
});
