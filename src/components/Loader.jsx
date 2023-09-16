import { StyleSheet, ActivityIndicator, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Loader = ({ size, style, color }) => {
  return (
    <View style={styles.Container}>
      <LinearGradient
        colors={["#AEDC81", "#6CC51D"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ opacity: 0.5 }}
      >
        <ActivityIndicator size={size} style={style} color={color} />
      </LinearGradient>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  Container: {
    width: "100%",
    height: 60,
    borderRadius: 5,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
