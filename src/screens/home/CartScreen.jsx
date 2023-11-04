import { SafeAreaView, View, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import EmptyCartInfo from "../../components/EmptyCartInfo";

export default function CartScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header style={{ justifyContent: "center" }} title="Shopping Cart" />
      <View
        style={{
          height: "80%",
          paddingHorizontal: 17,
          backgroundColor: "#F4F5F9",
        }}
      >
        <EmptyCartInfo text="Your cart is empty !" />
        <ButtonComponent
          text="Start Shopping"
          buttonFunction={() => navigation.navigate("Home Screen")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ItemsContainer: {
    backgroundColor: "#F4F5F9",
    padding: 15,
  },
});
