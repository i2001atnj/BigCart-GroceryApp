import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header";

export default function Favorites() {
  return (
    <SafeAreaView style={styles.Page}>
      <Header style={{ justifyContent: "center" }} title="Favorites" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Page: {
    paddingHorizontal: 17,
    backgroundColor: "#fff",
    height: "100%",
  },
});
