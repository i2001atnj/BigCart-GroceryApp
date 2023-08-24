import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Header } from "../components/components";

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.SearchScreen}>
      <Header arrow input />
      <View style={styles.Section}>
        <View style={styles.History}>
          <View style={styles.HistoryTitle}>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>
              Search history
            </Text>
            <TouchableOpacity>
              <Text style={styles.clearText}>clear</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
        <View style={styles.Discover}>
          <View style={styles.DiscoverTitle}>
            <Text style={{ fontSize: 18, fontWeight: 500 }}>Discover more</Text>
            <TouchableOpacity>
              <Text style={styles.clearText}>clear</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SearchScreen: {
    backgroundColor: "#FFF",
    height: "100%",
    width: "100%",
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 17,
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 16,
  },
  SearchBar: {
    display: "flex",
    flexDirection: "row",
    width: "91%",
    justifyContent: "space-around",
    backgroundColor: "#F4F5F9",
    height: 50,
    borderRadius: 5,
    alignItems: "center",
  },
  Input: {
    width: 210,
    fontWeight: "600",
    fontSize: 16,
  },
  Section: {
    paddingHorizontal: 17,
    backgroundColor: "#F4F5F9",
    height: "100%",
  },
  History: {
    height: 150,
    marginTop: 21,
  },
  HistoryTitle: {
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clearText: {
    color: "#407EC7",
    fontSize: 16,
    fontWeight: 500,
  },
  Discover: {
    height: 150,
  },
  DiscoverTitle: {
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
