import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/Header";
import EmptyCartInfo from "../components/EmptyCartInfo";
import ButtonComponent from "../components/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const MyOrdersScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Screen}>
      <Header returnArrow title="My Orders" style={{ paddingRight: "40%" }} />
      <EmptyCartInfo text="You don't have orders!" />
      <ButtonComponent
        text="Start shopping"
        buttonFunction={() => navigation.navigate("Home Screen")}
      />
    </SafeAreaView>
  );
};

export default MyOrdersScreen;

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: "#fff",
    height: "80%",
  },
});
