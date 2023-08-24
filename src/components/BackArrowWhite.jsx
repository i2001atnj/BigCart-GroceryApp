import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BackArrowWhite = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ position: "relative", top: 30 }}
    >
      <Image source={require("../assets/backVector.png")} />
    </TouchableOpacity>
  );
};

export default BackArrowWhite;
