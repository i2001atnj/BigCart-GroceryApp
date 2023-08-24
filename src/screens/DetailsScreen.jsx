import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { bag, blackArrow } from "../assets/assets";
import { LinearGradient } from "expo-linear-gradient";

const DetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <View
        style={{
          backgroundColor: route.params.color,
          height: 650,
          width: 650,
          position: "absolute",
          top: -250,
          left: -110,
          borderRadius: "1000%",
        }}
      ></View>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ marginLeft: 20, marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image source={blackArrow} />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
            marginTop: 30,
          }}
        >
          <Image
            style={{
              height: 300,
              width: 300,
              resizeMode: "contain",
            }}
            source={route.params.image}
          />
        </View>
        <View
          style={{
            backgroundColor: "#F0F0F0",
            height: "100%",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            padding: 30,
            gap: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: 600, color: "#28B446" }}>
            {route.params.price}
          </Text>
          <Text style={{ fontSize: 28, fontWeight: 600, color: "#000" }}>
            {route.params.name}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 500, color: "#868889" }}>
            {route.params.quantity}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: 300, color: "#868889" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            totam id facilis laudantium magnam iste quasi
          </Text>
          <View style={styles.AddInput}>
            <View>
              <Text style={{ fontSize: 16, color: "#868889" }}>Quantity</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 25,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRightWidth: 0.2,
                  paddingHorizontal: 15,
                  borderColor: "#868889",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 30, color: "#6CC51D" }}>-</Text>
              </TouchableOpacity>
              <TextInput
                placeholder="0"
                placeholderTextColor={"#00000062"}
                style={{ fontSize: 18, color: "#6CC51D" }}
              />
              <TouchableOpacity
                style={{
                  borderLeftWidth: 0.2,
                  paddingHorizontal: 15,
                  borderColor: "#868889",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 30, color: "#6CC51D" }}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <LinearGradient
            colors={["#AEDC81", "#6CC51D"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 5 }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                padding: 20,
                borderRadius: 5,
                gap: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                Add to cart
              </Text>
              <Image source={bag} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  AddInput: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingLeft: 25,
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
});
