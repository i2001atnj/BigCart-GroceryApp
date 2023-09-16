import { TouchableOpacity, Image } from "react-native";
import { backVector, blackArrow } from "../assets/icons/index";
import { useNavigation } from "@react-navigation/native";

const BackArrow = ({ color, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style} onPress={() => navigation.goBack()}>
      <Image
        source={color === "white" || color === "#fff" ? backVector : blackArrow}
      />
    </TouchableOpacity>
  );
};

export default BackArrow;
