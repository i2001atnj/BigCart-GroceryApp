import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const RedirectButton = ({ image, text, screen }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={["#AEDC81", "#6CC51D"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity
          style={styles.Button}
          onPress={() => navigation.navigate(screen)}
        >
          <Image source={image} style={{ position: "relative", right: 80 }} />
          <Text style={styles.ButtonText}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default RedirectButton;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    marginBottom: 50,
    shadowColor: "#AEDC81",
    shadowOffset: { height: 10, width: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "transparent",
    justifyContent: "center",
    marginTop: -30,
  },
  Button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  ButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
});
