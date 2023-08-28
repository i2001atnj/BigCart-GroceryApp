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
import { blackArrow, bag } from "../assets/assets";
import ButtonComponent from "../components/ButtonComponent";
import ProductBanner from "../components/ProductBanner";

const DetailsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const getProductState = () => {
    if (route.params.state === "new") {
      return (
        <ProductBanner
          backgroundColor="#FDEFD5"
          textColor="#E8AD41"
          borderColor="#e8ae4161"
          text={route.params.state}
        />
      );
    } else if (route.params.state) {
      return (
        <ProductBanner
          backgroundColor="#FEE4E4"
          textColor="#F56262"
          borderColor="#F56262"
          text={route.params.state}
        />
      );
    } else {
      return <View></View>;
    }
  };

  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <View
        style={[styles.Background, { backgroundColor: route.params.color }]}
      ></View>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          style={{ marginLeft: 20, marginTop: 20 }}
          onPress={() => navigation.goBack()}
        >
          <Image source={blackArrow} />
        </TouchableOpacity>
        <View style={styles.ImageContainer}>
          <Image style={styles.ProductImage} source={route.params.image} />
        </View>
        <View style={styles.Section}>
          <View style={styles.TextSection}>
            <Text style={[styles.TextBold, { fontSize: 18, color: "#28B446" }]}>
              {route.params.price}
            </Text>
            {getProductState()}
            <Text style={{ fontSize: 28, fontWeight: 600 }}>
              {route.params.name}
            </Text>
            <Text style={[styles.InfoTextGeneral, { fontWeight: 500 }]}>
              {route.params.quantity}
            </Text>
            <Text style={[styles.InfoTextGeneral, { marginBottom: 10 }]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates totam id facilis laudantium magnam iste quasi
            </Text>
          </View>
          <View style={styles.AddInput}>
            <Text style={styles.InfoTextGeneral}>Quantity</Text>
            <View
              style={{ flexDirection: "row", gap: 25, paddingHorizontal: 15 }}
            >
              <TouchableOpacity>
                <Text style={styles.AddButtonText}>-</Text>
              </TouchableOpacity>
              <TextInput
                placeholder="0"
                placeholderTextColor={"#00000062"}
                style={{ fontSize: 18, color: "#6CC51D" }}
              />
              <TouchableOpacity>
                <Text style={styles.AddButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ButtonComponent text="Add to cart" image={bag} content="center" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  Background: {
    height: 650,
    width: 650,
    position: "absolute",
    top: -250,
    left: -110,
    borderRadius: "1000%",
  },
  AddInput: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 17,
    alignItems: "center",
    borderRadius: 5,
  },
  AddButtonText: {
    fontSize: 30,
    color: "#6CC51D",
  },
  ImageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  ProductImage: {
    height: 350,
    width: 350,
    resizeMode: "contain",
  },
  Section: {
    backgroundColor: "#F0F0F0",
    height: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingTop: 30,
    gap: 10,
  },
  TextSection: {
    paddingHorizontal: 20,
    gap: 10,
  },
  TextBold: {
    fontWeight: 600,
  },
  InfoTextGeneral: {
    color: "#868889",
    fontSize: 16,
  },
});
