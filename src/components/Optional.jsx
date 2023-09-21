import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Optional = ({
  optionalText,
  buttonText,
  buttonTextColor,
  optionalScreen,
  style,
}) => {
  const navigation = useNavigation();
  return (
    <View style={style}>
      <Text style={{ color: "#868889" }}>{optionalText}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(optionalScreen)}>
        <Text style={{ color: buttonTextColor, fontWeight: 600 }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Optional;
