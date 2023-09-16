import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";

const TransactionsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header
        returnArrow
        title="Transactions"
        titleStyle={{ marginRight: "37%" }}
      />
      <View style={{ height: "100%", backgroundColor: "#F4F5F9" }}></View>
    </SafeAreaView>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({});
