import { SafeAreaView, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import EmptyCartInfo from "../../components/EmptyCartInfo";

export default function CartScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "80%" }}>
      <Header style={{ justifyContent: "center" }} title="Shopping Cart" />
      <EmptyCartInfo text="Your cart is empty !" />
      <ButtonComponent
        text="Start shopping"
        buttonFunction={() => navigation.navigate("Home Screen")}
        style={{ paddingHorizontal: 17 }}
      />
    </SafeAreaView>
  );
}
