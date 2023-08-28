import { SafeAreaView } from "react-native";
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
    </SafeAreaView>
  );
};

export default MyFavoritesScreen;
