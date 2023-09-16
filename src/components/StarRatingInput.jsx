import { StyleSheet, View, TextInput } from "react-native";

const StarRatingInput = () => {
  return (
    <View style={styles.RatingSection}>
      <View style={styles.RatingInputContainer}>
        <TextInput style={styles.Input} />
      </View>
    </View>
  );
};

export default StarRatingInput;

const styles = StyleSheet.create({
  RatingSection: {
    width: "100%",
  },
  RatingInputContainer: {
    width: "100%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "#F4F5F9",
  },
  Input: {
    textAlign: "left",
    width: "100%",
    paddingLeft: 15,
  },
});
