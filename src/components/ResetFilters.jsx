import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { reload } from "../assets/icons/index";

const ResetFilters = () => {
  return (
    <TouchableOpacity>
      <Image source={reload} />
    </TouchableOpacity>
  );
};

export default ResetFilters;

const styles = StyleSheet.create({});
