import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const OptionalButton = ({ screen, text, textColor }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <Text style={{ color: textColor, fontWeight: 600 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OptionalButton;
