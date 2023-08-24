import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const AccessButton = ({ accessFunction, text }) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={["#AEDC81", "#6CC51D"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <TouchableOpacity onPress={accessFunction} style={styles.Button}>
          <Text style={styles.ButtonText}>{text}</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default AccessButton;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    shadowColor: "#AEDC81",
    shadowOffset: { height: 10, width: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: 17,
    marginTop: 10,
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
