import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Filters, SearchBar, BackArrow, ResetFilters } from "./components";

const Header = ({ arrow, title, filters, input, style, titleStyle, reset }) => {
  return (
    <View style={[styles.Header, style]}>
      {arrow ? <BackArrow /> : <></>}
      {title ? (
        <Text style={[{ fontSize: 18, fontWeight: 500 }, titleStyle]}>
          {title}
        </Text>
      ) : (
        <></>
      )}
      {filters ? <Filters /> : <></>}
      {input ? <SearchBar /> : <></>}
      {reset ? <ResetFilters /> : <></>}
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
