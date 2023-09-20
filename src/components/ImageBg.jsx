import { StyleSheet, ImageBackground } from "react-native";
import Header from "./Header";

const ImageBg = ({
  title,
  image,
  bgStyle,
  returnArrow,
  headerStyle,
  titleStyle,
  arrowColor,
}) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={[styles.BackgroundImage, bgStyle]}
    >
      <Header
        title={title}
        style={[
          headerStyle,
          {
            backgroundColor: "transparent",
            marginTop: "10%",
          },
        ]}
        titleStyle={[
          { color: "#fff", fontWeight: 500, fontSize: 20 },
          titleStyle,
        ]}
        returnArrow={returnArrow}
        color={arrowColor}
      />
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
    paddingHorizontal: 17,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  TitleText: {
    fontSize: 20,
    color: "#FFF",
    textAlign: "center",
    marginTop: 40,
  },
});
