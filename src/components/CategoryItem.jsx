import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const CategoryItem = ({ image, name, color, btnFunction }) => {
  return (
    <TouchableOpacity onPress={btnFunction} style={styles.Item}>
      <View
        style={{
          height: 66,
          width: 66,
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: color,
        }}
      >
        <Image source={image} style={styles.Image} />
      </View>
      <Text style={[styles.Name, { fontWeight: 500 }]}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  Item: {
    height: 125,
    width: 125,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginTop: 10,
    marginHorizontal: 3,
  },
  Image: {
    height: 36,
    width: 30,
  },
  Name: {
    color: "#868889",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});
