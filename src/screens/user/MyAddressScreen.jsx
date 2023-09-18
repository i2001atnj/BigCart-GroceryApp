import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useNavigation } from "@react-navigation/native";

const MyAddressScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header
        returnArrow
        title="My Address"
        addButton
        addFunction={() => navigation.navigate("Add Address Screen")}
      />
      <View style={{ height: "100%", backgroundColor: "#F4F5F9" }}></View>
    </SafeAreaView>
  );
};

export default MyAddressScreen;

const styles = StyleSheet.create({});
