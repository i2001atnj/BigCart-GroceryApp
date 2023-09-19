import { StyleSheet, Text, View } from "react-native";
import Filters from "./FilterButton";
import SearchBar from "./SearchBar";
import BackArrow from "./BackArrow";
import ResetFilters from "./ResetFilters";
import AddButton from "./AddButton";

const Header = ({
  returnArrow,
  title,
  filters,
  input,
  style,
  titleStyle,
  refresh,
  addButton,
  addFunction,
  color,
}) => {
  return (
    <View style={[styles.Header, style]}>
      {returnArrow ? <BackArrow color={color} /> : <></>}
      {title ? (
        <Text style={[{ fontSize: 18, fontWeight: 500 }, titleStyle]}>
          {title}
        </Text>
      ) : (
        <></>
      )}
      {filters ? <Filters /> : <></>}
      {input ? <SearchBar /> : <></>}
      {refresh ? <ResetFilters /> : <></>}
      {addButton ? <AddButton addFunction={addFunction} /> : <></>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    backgroundColor: "#FFF",
    height: 55,
  },
});
