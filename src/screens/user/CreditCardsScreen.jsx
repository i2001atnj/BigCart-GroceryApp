import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const CreditCardsScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#FFF" }}>
      <Header
        returnArrow
        title="My Cards"
        addButton
        addFunction={() => navigation.navigate("Add Credit Card Screen")}
      />
      <View style={{ height: "100%", backgroundColor: "#F4F5F9" }}></View>
    </SafeAreaView>
  );
};

export default CreditCardsScreen;

const styles = StyleSheet.create({});
