import React from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  Searchbar,
  Banner,
  Categories,
  FeaturedProducts,
} from "../components/components";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.Homepage}>
      <StatusBar style="auto" />
      <LinearGradient colors={["#FFFFFF", "#F4F5F9"]}>
        <View style={styles.SearchbarSection}>
          <Searchbar />
        </View>
        <ScrollView>
          <View style={styles.BannerSection}>
            <Banner />
          </View>
          <View style={styles.CategoriesSection}>
            <Categories />
          </View>
          <View style={styles.FeaturedProductsSection}>
            <FeaturedProducts />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Homepage: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  SearchbarSection: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 27,
    paddingVertical: 5,
  },
  BannerSection: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 300,
    width: "100%",
    zIndex: 1,
    marginTop: 10,
    paddingHorizontal: 17,
  },
  CategoriesSection: {
    marginTop: -25,
    paddingHorizontal: 17,
  },
  FeaturedProductsSection: {
    marginTop: 25,
    paddingHorizontal: 17,
  },
});
