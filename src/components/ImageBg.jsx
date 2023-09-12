import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

const ImageBg = ({ title, image }) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackgroundImage}
    >
      <View style={styles.Title}>
        <Text style={styles.TitleText}>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default ImageBg;

const styles = StyleSheet.create({
  BackgroundImage: {
    height: 638,
    zIndex: 1,
    position: "absolute",
    width: "100%",
  },
  TitleText: {
    fontSize: 20,
    fontWeight: 500,
    color: "#FFF",
    textAlign: "center",
    marginTop: 60,
  },
});
