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
      <View style={styles.Title}>
        {returnArrow ? (
          <BackArrow color="#fff" style={{ position: "relative", top: 60 }} />
        ) : (
          <></>
        )}
        <Text style={[styles.TitleText, { fontWeight: 500 }]}>{title}</Text>
      </View>
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
    paddingHorizontal: 17,
  },
  TitleText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    marginTop: 40,
  },
});
