import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Button = ({ image, text, buttonFunction, left, style, disabled }) => {
  return (
    <View
      style={[
        styles.ButtonContainer,
        disabled ? { opacity: 0.6 } : null,
        style,
      ]}
    >
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

export default Button;

const styles = StyleSheet.create({
  ButtonContainer: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#AEDC81",
    shadowOffset: { height: 10, width: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  Button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
});
