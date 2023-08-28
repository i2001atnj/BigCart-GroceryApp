import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../components/Header";

const CategoryScreen = () => {
  const route = useRoute();
  return (
    <SafeAreaView style={styles.CategoryScreen}>
      <Header returnArrow title={route.params.name} filters />
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  CategoryScreen: {
    backgroundColor: "#fff",
    height: "100%",
  },
});
