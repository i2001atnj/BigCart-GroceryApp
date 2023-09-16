import { StyleSheet, Text, View } from "react-native";
import PriceInput from "./PriceInput";
import StarRatingInput from "./StarRatingInput";
import Others from "./Others";

const FilterItem = ({
  title,
  placeholderTextColor,
  priceInput,
  starRating,
  others,
}) => {
  return (
    <View style={styles.SectionItem}>
      <Text style={{ fontSize: 16, fontWeight: 600 }}>{title}</Text>
      {priceInput ? (
        <PriceInput placeholderTextColor={placeholderTextColor} />
      ) : (
        <></>
      )}
      {starRating ? <StarRatingInput /> : <></>}
      {others ? <Others /> : <></>}
    </View>
  );
};

export default FilterItem;

const styles = StyleSheet.create({
  SectionItem: {
    backgroundColor: "#FFF",
    padding: 17,
  },
});
