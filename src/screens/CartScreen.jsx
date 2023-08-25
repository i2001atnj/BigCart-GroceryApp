import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React from "react";
import { ButtonComponent } from "../components/components";
import { shoppingCartPageVector } from "../assets/assets";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../components/components";

export default function CartScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Header style={{ justifyContent: "center" }} title="Shopping Cart" />
      {/* <SafeAreaView style={styles.ShoppingCart}>
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
        <ButtonComponent
          text="Start shopping"
          buttonFunction={() => navigation.navigate("Home")}
          style={{ marginBottom: 30 }}
        />
      </SafeAreaView> */}
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
