import {
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { BANNERS } from "../data/banners";

const Dot = ({ active }) => (
  <View style={active ? styles.DotActive : styles.Dot} />
);

export default function Banner() {
  const window = useWindowDimensions();
  const ITEM_SIZE = window.width - 1 * 30;
  const [activeIndicator, setActiveIndicator] = useState(0);
  const onScroll = (evt) => {
    const index = Math.floor(evt.nativeEvent.contentOffset.x / ITEM_SIZE);
    setActiveIndicator(index);
  };

  return (
    <View style={styles.Container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {BANNERS.map((banner) => (
          <Image
            key={banner.id}
            source={banner.image}
            style={{ width: ITEM_SIZE }}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>20% off on your first purchase</Text>
      </View>
      <View style={styles.DotContainer}>
        {BANNERS.map((item, index) => (
          <Dot key={item.id} active={index === activeIndicator} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    width: "100%",
    height: 300,
    zIndex: 1,
    paddingHorizontal: 17,
    paddingTop: 10,
  },
  TextContainer: {
    width: 137,
    textAlign: "center",
  },
  Text: {
    position: "relative",
    zIndex: 2,
    bottom: 85,
    right: 90,
    fontWeight: 600,
    fontSize: 18,
  },
  DotContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 14,
    position: "absolute",
    top: 210,
    left: 40,
  },
  DotActive: {
    width: 24,
    height: 6,
    backgroundColor: "#6CC51D",
    borderRadius: 6,
    marginHorizontal: 4,
  },
  Dot: {
    width: 6,
    height: 6,
    backgroundColor: "#FFF",
    borderRadius: 6,
    marginHorizontal: 7,
  },
});
