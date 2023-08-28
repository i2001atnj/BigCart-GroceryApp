import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { filters } from "../assets/assets";
import { useNavigation } from "@react-navigation/native";

const Filters = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Filters Screen")}>
      <Image source={filters} />
    </TouchableOpacity>
  );
};

export default Filters;
