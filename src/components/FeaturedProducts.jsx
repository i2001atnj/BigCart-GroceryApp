import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ProductItem from "./ProductItem";

export default function FeaturedProducts({ products = [] }) {
  const renderItem = ({ item }) => <ProductItem product={item} />;
  return (
    <View style={styles.FeaturedProducts}>
      <TouchableOpacity style={styles.Header}>
        <View>
          <Text style={styles.Title}>Featured products</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../assets/rightVector.png")} />
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.ListContainer}>
        <FlatList
          numColumns={2}
          key={1}
          scrollEnabled={true}
          data={products}
          renderItem={renderItem}
          style={styles.ProductsList}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FeaturedProducts: {
    gap: 10,
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 50,
  },
  Title: {
    fontWeight: 600,
    fontSize: 18,
  },
  ListContainer: {
    marginBottom: 20,
  },
  ProductsList: {
    display: "flex",
    flexDirection: "column",
  },
});
