import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { filters, search } from "../assets/assets";
import { Filters } from "./components";

export default function SearchBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.SearchBar}>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Image source={search} />
      </TouchableOpacity>
      <TextInput
        placeholder="Search keywords.."
        placeholderTextColor={"#868889"}
        style={styles.Input}
      />
      <Filters />
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBar: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-around",
    backgroundColor: "#F4F5F9",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
  },
  Input: {
    width: 200,
    fontWeight: "600",
    fontSize: 16,
  },
});
