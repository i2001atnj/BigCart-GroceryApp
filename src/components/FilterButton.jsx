import { TouchableOpacity, Image } from "react-native";
import { filters } from "../assets/icons/index";
import { useNavigation } from "@react-navigation/native";

const FilterButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Filters Screen")}>
      <Image source={filters} />
    </TouchableOpacity>
  );
};

export default FilterButton;
