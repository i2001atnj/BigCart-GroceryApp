import { StyleSheet, View, TextInput } from "react-native";
import React from "react";

const PriceInput = ({ placeholderTextColor }) => {
  return (
    <View style={styles.PriceSection}>
      <View style={styles.PriceInputContainer}>
        <TextInput
          placeholder="Min."
          placeholderTextColor={placeholderTextColor}
          style={styles.Input}
        />
      </View>
      <View style={styles.PriceInputContainer}>
        <TextInput
          placeholder="Max."
          placeholderTextColor={placeholderTextColor}
          style={styles.Input}
        />
      </View>
    </View>
  );
};

export default PriceInput;

const styles = StyleSheet.create({
  PriceSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 7,
  },
  PriceInputContainer: {
    backgroundColor: "#F4F5F9",
    width: "48%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
  },
  Input: {
    textAlign: "left",
    width: "100%",
    paddingLeft: 15,
  },
});
