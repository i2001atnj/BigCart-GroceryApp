import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";

const MyAddressScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Header returnArrow />
    </SafeAreaView>
  );
};

export default MyAddressScreen;

const styles = StyleSheet.create({});
