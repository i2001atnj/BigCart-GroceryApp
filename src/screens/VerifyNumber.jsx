import { SafeAreaView, StyleSheet, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const VerifyNumberScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header
        returnArrow
        title="Verify Number"
        titleStyle={{ marginRight: "35%" }}
      />
      <View style={{ height: "100%", backgroundColor: "#F4F5F9" }}></View>
    </SafeAreaView>
  );
};

export default VerifyNumberScreen;

const styles = StyleSheet.create({});
