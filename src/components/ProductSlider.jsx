import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductSlider = ({
  id,
  name,
  image,
  price,
  quantity,
  color,
  state,
  category,
}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Product Details Screen", {
            id: id,
            name: name,
            image: image,
            price: price,
            quantity: quantity,
            color: color,
            state: state,
            category: category,
          })
        }
        style={{ flexDirection: "row" }}
      >
        <View style={[styles.ImageContainer, { backgroundColor: color }]}>
          <Image
            source={image}
            style={{
              height: 75,
              width: 75,
              resizeMode: "contain",
              marginTop: 40,
            }}
          />
        </View>
        <View style={{ marginLeft: 27, justifyContent: "center" }}>
          <Text style={[styles.Text, { fontWeight: 500, color: "#6CC51D" }]}>
            {price}
          </Text>
          <Text
            style={[
              styles.Text,
              { fontWeight: 600, color: "#000", fontSize: 16 },
            ]}
          >
            {name}
          </Text>
          <Text style={[styles.Text, { fontWeight: 400, color: "#868889" }]}>
            {quantity}
          </Text>
        </View>
      </TouchableOpacity>
      <Text
        style={state === "new" ? { color: "#E8AD41" } : { color: "#F56262" }}
      >
        {state}
      </Text>
      <View
        style={{
          borderColor: "#eee",
          borderLeftWidth: 1,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>+</Text>
        </TouchableOpacity>
        <Text>0</Text>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductSlider;

const styles = StyleSheet.create({
  Container: {
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    alignItems: "center",
    padding: 15,
  },
  ImageContainer: {
    height: 65,
    width: 65,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    fontStyle: "normal",
  },
  Button: {
    // backgroundColor: "#efef",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
  },
  ButtonText: {
    fontSize: 22,
    color: "#6CC51D",
  },
});
