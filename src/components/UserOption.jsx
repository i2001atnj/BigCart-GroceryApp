import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const UserOption = ({ image, title, screen }) => {
  const navigation = useNavigation();
  const rightvector = require("../assets/rightVector.png");
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.UserSetting}
    >
      <Image source={image} />
      <View style={styles.SettingNameSection}>
        <Text style={styles.SettingName}>{title}</Text>
      </View>
      <Image source={rightvector} />
    </TouchableOpacity>
  );
};

export default UserOption;

const styles = StyleSheet.create({
  UserSetting: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 38,
  },
  SettingNameSection: {
    width: "80%",
  },
  SettingName: {
    position: "relative",
    fontSize: 16,
    fontWeight: 600,
  },
});
