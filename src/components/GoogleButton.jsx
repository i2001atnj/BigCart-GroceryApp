import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { googleLogo } from "../assets/icons/index";

const ContinueWithGoogleButton = () => {
  return (
    <View style={styles.ButtonContainer1}>
      <TouchableOpacity style={styles.Button}>
        <Image
          source={googleLogo}
          style={{ position: "relative", right: 70 }}
        />
        <Text style={styles.ButtonText1}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContinueWithGoogleButton;

const styles = StyleSheet.create({
  ButtonContainer1: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 60,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: "center",
    marginTop: 15,
  },
  Button: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  ButtonText1: {
    color: "#000",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
});
