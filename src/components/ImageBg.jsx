import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import BackArrow from "./BackArrow";

const ImageBg = ({ title, image, returnArrow, style }) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={[styles.BackgroundImage, style]}
    >
      {returnArrow ? (
        <View style={styles.Title}>
          <BackArrow
            color="#fff"
            style={{ position: "relative", top: 70, left: 17 }}
          />
          <Text style={styles.TitleText}>{title}</Text>
        </View>
      ) : (
        <View style={styles.Title}>
          <Text style={styles.TitleText}>{title}</Text>
        </View>
      )}
    </ImageBackground>
  );
};

export default ImageBg;

const styles = StyleSheet.create({
  BackgroundImage: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
  },
  Title: {
    height: "15%",
    justifyContent: "center",
  },
  TitleText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    marginTop: 50,
  },
});
