import { Text, View, TouchableOpacity, Image } from "react-native";
import { rightVector } from "../assets/icons/index";

const Option = ({ image, title, optionFunction, signOutButton }) => {
  return (
    <TouchableOpacity
      onPress={optionFunction}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 38,
        alignItems: "center",
      }}
    >
      <Image source={image} />
      <View style={{ width: "80%" }}>
        <Text
          style={
            !signOutButton
              ? { fontSize: 16, fontWeight: 600 }
              : { fontSize: 16, fontWeight: 600, right: 30 }
          }
        >
          {title}
        </Text>
      </View>
      <Image
        style={signOutButton ? { display: "none" } : { display: "flex" }}
        source={rightVector}
      />
    </TouchableOpacity>
  );
};

export default Option;
