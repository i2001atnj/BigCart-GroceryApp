import { TouchableOpacity, Image } from "react-native";
import React from "react";
import { filters } from "../assets";
import { useNavigation } from "@react-navigation/native";

const FilterButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Filters")}>
      <Image source={filters} />
    </TouchableOpacity>
  );
};

export default FilterButton;
