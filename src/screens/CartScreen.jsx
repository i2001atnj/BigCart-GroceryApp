import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import { Header, ButtonComponent } from "../components/components";
import { shoppingCartPageVector } from "../assets/assets";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header style={{ justifyContent: "center" }} title="Shopping Cart" />
      <View style={styles.CartInfoContainer}>
        <View style={styles.Info}>
          <Image source={shoppingCartPageVector} />
          <View style={{ gap: 16 }}>
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
        </View>
        <ButtonComponent
          text="Start shopping"
          buttonFunction={() => navigation.navigate("Home")}
          style={{ position: "relative", top: "34%" }}
        />
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
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#F4F5F9",
    paddingBottom: "30%",
  },
  Info: {
    gap: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
