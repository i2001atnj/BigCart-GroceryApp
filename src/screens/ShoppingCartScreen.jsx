import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function ShoppingCart({ navigation }) {
  return (
    <SafeAreaView style={styles.ShoppingCart}>
      <View style={styles.CartInfoContainer}>
        <View style={styles.ImageContainer}>
          <Image source={require("../assets/shoppingCartPageVector.png")} />
        </View>
        <Text style={styles.Text1}>Your cart is empty !</Text>
        <Text style={styles.Text2}>
          You will get a response within a few minutes.
        </Text>
      </View>
      <View style={styles.ButtonContainer}>
        <LinearGradient
          colors={["#AEDC81", "#6CC51D"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <TouchableOpacity
            style={styles.Button}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.ButtonText}>Start shopping</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ShoppingCart: {
    backgroundColor: "#F4F5F9",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  CartInfoContainer: {
    alignItems: "center",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  ImageContainer: {
    alignItems: "center",
  },
  Text1: {
    fontSize: 22,
    fontWeight: 600,
    textAlign: "center",
  },
  Text2: {
    fontSize: 17,
    fontWeight: 500,
    color: "#868889",
    width: 235,
    textAlign: "center",
  },
  ButtonContainer: {
    width: "80%",
    height: 60,
    borderRadius: 5,
    marginBottom: 40,
    shadowColor: "#AEDC81",
    shadowOffset: { height: 8, width: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    backgroundColor: "transparent",
  },
  Button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
  ButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,
  },
});
