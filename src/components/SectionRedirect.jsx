import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { rightVector } from "../assets/icons/index";
import { useNavigation } from "@react-navigation/native";

const SectionRedirect = ({ title, screen }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.Title}
      onPress={() => navigation.navigate(screen)}
    >
      <Text style={{ fontWeight: "600", fontSize: 18 }}>{title}</Text>
      <View>
        <Image source={rightVector} />
      </View>
    </TouchableOpacity>
  );
};

export default SectionRedirect;

const styles = StyleSheet.create({
  Title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
