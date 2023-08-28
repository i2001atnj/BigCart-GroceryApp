import { SafeAreaView, StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import Header from "../components/Header";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";
import EmptyCartInfo from "../components/EmptyCartInfo";

export default function CartScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header style={{ justifyContent: "center" }} title="Shopping Cart" />
      <EmptyCartInfo text="Your cart is empty !" />
      <ButtonComponent
        text="Start shopping"
        buttonFunction={() => navigation.navigate("Home Screen")}
        style={{ position: "relative", top: "34%" }}
      />
    </SafeAreaView>
  );
}
