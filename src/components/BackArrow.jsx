import { TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { backVector, blackArrow } from "../assets/assets";

const BackArrow = ({ color, style }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style} onPress={() => navigation.goBack()}>
      {color === "white" || color === "#fff" ? (
        <Image source={backVector} />
      ) : (
        <Image source={blackArrow} />
      )}
    </TouchableOpacity>
  );
};

export default BackArrow;
