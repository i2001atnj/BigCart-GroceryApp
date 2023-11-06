import { SafeAreaView, View, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Header";
import EmptyCartInfo from "../../components/EmptyCartInfo";
import ButtonComponent from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const MyFavoritesScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.Screen}>
      <Header
        returnArrow
        title="My Favorites"
        style={{ paddingRight: "38%" }}
      />
      <View
        style={{
          height: "100%",
          paddingHorizontal: 17,
          backgroundColor: "#F4F5F9",
        }}
      >
        <EmptyCartInfo text="You don't have favorites!" />
        <ButtonComponent
          text="Start shopping"
          buttonFunction={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyFavoritesScreen;

const styles = StyleSheet.create({
  Screen: {
    backgroundColor: "#fff",
    height: "80%",
  },
});
