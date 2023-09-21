import { StyleSheet, View, Image, TextInput } from "react-native";

const Input = ({
  icon,
  placeholder,
  onChangeTextFunction,
  value,
  secureTextEntry,
  style,
  inputStyle,
}) => {
  return (
    <View style={[styles.InputContainer, style]}>
      <Image source={icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#868889"
        style={[styles.Input, inputStyle]}
        autoCapitalize="none"
        onChangeText={onChangeTextFunction}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  InputContainer: {
    height: 60,
    backgroundColor: "#FFF",
    paddingHorizontal: 28,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    alignItems: "center",
    gap: 21,
  },
  Input: {
    fontSize: 16,
    width: "86%",
  },
});
