import { View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { blackArrow } from "../assets/assets";

const DetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={blackArrow} />
      </TouchableOpacity>
      <View></View>
      <View></View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
