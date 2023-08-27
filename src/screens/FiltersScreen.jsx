import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { FilterItem, Header } from "../components/components";

export default function FiltersScreen() {
  return (
    <SafeAreaView style={styles.FiltersScreen}>
      <Header arrow title="Apply Filters" reset />
      <View style={{ backgroundColor: "#F4F5F9", height: "100%" }}>
        <View style={styles.Section}>
          <FilterItem title="Price Range" priceInput placeholder="Min." />
          <FilterItem title="Star Rating" starRating />
          <FilterItem title="Others" others />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  FiltersScreen: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
  },
  Section: {
    backgroundColor: "#F4F5F9",
    padding: 17,
    gap: 2,
  },
});
