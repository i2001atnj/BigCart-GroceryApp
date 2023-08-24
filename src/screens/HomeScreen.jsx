import React from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import {
  Banner,
  Categories,
  FeaturedProducts,
  Header,
} from "../components/components";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.Homepage}>
      <LinearGradient colors={["#FFFFFF", "#F4F5F9"]}>
        <View style={styles.SearchBarSection}>
          <Header input />
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
    alignItems: "center",
  },
  SearchBarSection: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginLeft: 20,
  },
  BannerSection: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 300,
    width: "100%",
    zIndex: 1,
    paddingHorizontal: 17,
  },
  CategoriesSection: {
    paddingHorizontal: 17,
  },
  FeaturedProductsSection: {
    marginTop: 20,
    paddingHorizontal: 17,
  },
});
