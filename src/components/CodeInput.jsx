import { StyleSheet, TextInput, View } from "react-native";

const CodeInput = () => {
  return (
    <View style={styles.Container}>
      <TextInput
        placeholder="0"
        style={{ fontSize: 20, fontWeight: 500, color: "#000" }}
        secureTextEntry
      />
    </View>
  );
};

export default CodeInput;

const styles = StyleSheet.create({
  Container: {
    width: 70,
    height: 70,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
