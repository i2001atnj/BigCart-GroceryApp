import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { CATEGORIES } from "../data/categories";

export default function Categories() {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.Title}
        onPress={() => navigation.navigate("Categories")}
      >
        <Text style={styles.CategoriesTitle}>Categories</Text>
        <View>
          <Image source={require("../assets/rightVector.png")} />
        </View>
      </TouchableOpacity>
      <ScrollView
        horizontal
        style={styles.CategoriesMenu}
        showsHorizontalScrollIndicator={false}
      >
        {CATEGORIES.map((item) => (
          <View key={item.id} style={styles.Category}>
            <TouchableOpacity
              style={{
                backgroundColor: `${item.color}`,
                width: 52,
                height: 52,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={item.image} />
            </TouchableOpacity>
            <Text style={styles.CategoryTitle}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  Title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CategoriesTitle: {
    fontWeight: 600,
    fontSize: 18,
  },
  CategoriesMenu: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    gap: 20,
  },
  Category: {
    alignItems: "center",
    width: 75,
    gap: 10,
  },
  CategoryTitle: {
    fontWeight: 500,
    fontSize: 12,
    color: "#868889",
  },
});
