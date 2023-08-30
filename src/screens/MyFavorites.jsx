import { SafeAreaView, View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";

const MyFavoritesScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
      <Header
        returnArrow
        title="My Favorites"
        style={{ paddingRight: "38%" }}
      />
      <View style={{ height: "100%", backgroundColor: "#F4F5F9" }}></View>
    </SafeAreaView>
  );
};

export default MyFavoritesScreen;
