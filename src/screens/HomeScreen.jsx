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
    <LinearGradient colors={["#FFFFFF", "#F4F5F9"]}>
      <SafeAreaView style={styles.Homepage}>
        <View>
          <Header input />
        </View>
        <ScrollView>
          <Banner />
          <Categories />
          <FeaturedProducts />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  Homepage: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
