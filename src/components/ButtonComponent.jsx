import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const ButtonComponent = ({
  image,
  text,
  buttonFunction,
  left,
  style,
  disabled,
}) => {
  return (
    <View style={disabled ? styles.disabledStyle : [styles.Container, style]}>
      <LinearGradient
        colors={["#AEDC81", "#6CC51D"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ borderRadius: 5 }}
      >
        <TouchableOpacity
          style={styles.Button}
          onPress={buttonFunction}
          disabled={disabled}
        >
          <Image
            source={image}
            style={
              left
                ? { position: "relative", right: 80 }
                : { position: "relative", marginRight: 15 }
            }
          />
          <Text
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            {text}
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    backgroundColor: "transparent",
    paddingHorizontal: 17,
  },
  Button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  disabledStyle: {
    opacity: 0.7,
    width: "100%",
    height: 60,
    borderRadius: 5,
    backgroundColor: "transparent",
    paddingHorizontal: 17,
  },
});
