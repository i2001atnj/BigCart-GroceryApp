import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { CATEGORIES } from "../data/categories";
import { Header } from "../components/components";

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.CategoriesScreen}>
      <Header arrow title="Categories" filters />
      <ScrollView contentContainerStyle={styles.ItemsContainer} horizontal>
        {CATEGORIES.map((item) => (
          <TouchableOpacity style={styles.Item} key={item.id}>
            <View
              style={{
                backgroundColor: `${item.color}`,
                height: 66,
                width: 66,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={item.image} style={styles.Image} />
            </View>
            <Text style={styles.Name}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  CategoriesScreen: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
  },
  Header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    padding: 28,
    backgroundColor: "#FFF",
  },
  HeaderText: {
    fontSize: 18,
    fontWeight: 500,
  },
  ItemsContainer: {
    flexWrap: "wrap",
    width: "100%",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#F4F5F9",
    paddingTop: 21,
    paddingHorizontal: 17,
  },
  Item: {
    height: 125,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  Image: {
    height: 36,
    width: 30,
  },
  Name: {
    color: "#868889",
    fontSize: 14,
    fontWeight: 500,
    textAlign: "center",
    marginTop: 9,
  },
});
