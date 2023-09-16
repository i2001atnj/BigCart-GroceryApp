import { View, Text, StyleSheet } from "react-native";

const ProductBanner = ({ backgroundColor, textColor, borderColor, text }) => {
  return (
    <View
      style={[
        styles.Banner,
        {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        },
      ]}
    >
      <Text style={{ color: textColor }}> {text} </Text>
    </View>
  );
};

export default ProductBanner;

const styles = StyleSheet.create({
  Banner: {
    position: "absolute",
    left: "90%",
    height: 70,
    width: 50,
    top: -30,
    justifyContent: "center",
    alignItems: "center",
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
