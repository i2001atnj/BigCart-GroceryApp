import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { addToCartIcon, heartVector1 } from "../assets/icons/index";
import { useNavigation } from "@react-navigation/native";

export default ProductItem = ({
  id,
  name,
  image,
  price,
  quantity,
  color,
  state,
  type,
}) => {
  const navigation = useNavigation();
  const getProductState = () => {
    if (state === "new") {
      return (
        <View
          style={{
            backgroundColor: "#FDEFD5",
            height: 18,
            width: 38,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#E8AD41", fontSize: 12 }}>NEW</Text>
        </View>
      );
    } else if (state) {
      return (
        <View
          style={{
            backgroundColor: "#FEE4E4",
            height: 18,
            width: 38,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#F56262", fontSize: 12 }}>{state}</Text>
        </View>
      );
    }
    return <View></View>;
  };
  return (
    <View style={styles.ProductContainer}>
      <View style={styles.ProductHeader}>
        {getProductState()}
        <TouchableOpacity
          style={{
            height: 32,
            width: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={heartVector1} />
        </TouchableOpacity>
      </View>
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
            type: type,
          })
        }
        style={styles.ProductMain}
      >
        <View
          style={{
            backgroundColor: `${color}`,
            height: 84,
            width: 84,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 90, height: 80, resizeMode: "contain" }}
            source={image}
          />
        </View>
        <View style={styles.ProductInfo}>
          <Text style={{ color: "#6CC51D" }}>{price}</Text>
          <Text style={{ color: "#000000", fontWeight: "600", fontSize: 16 }}>
            {name}
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "500", color: "#868889" }}>
            {quantity}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ProductBottom}>
        <Image source={addToCartIcon} />
        <Text>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ProductContainer: {
    height: 240,
    width: 181,
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },
  ProductHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    height: 25,
    flexDirection: "row",
  },
  ProductMain: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ProductInfo: {
    alignItems: "center",
    marginTop: 5,
    gap: 5,
  },
  ProductBottom: {
    borderTopWidth: 2,
    height: 41,
    paddingHorizontal: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#F4F5F9",
    flexDirection: "row",
    gap: 10,
  },
});
