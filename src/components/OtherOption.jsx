import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { check } from "../assets/icons/index";

const OtherOption = ({ image, title }) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 22,
          justifyContent: "center",
        }}
      >
        <Image
          style={{ height: 20, width: 20, resizeMode: "contain" }}
          source={image}
        />
        <Text style={{ fontWeight: 500, color: "#868889", fontSize: 15 }}>
          {title}
        </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={check} />
      </View>
    </TouchableOpacity>
  );
};

export default OtherOption;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: "#EBEBEB",
  },
});
