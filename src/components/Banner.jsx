import {
  View,
  Text,
  ScrollView,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { BannerList } from "../data/bannerList.js";

const Dot = ({ active }) => (
  <View style={active ? styles.DotActive : styles.Dot} />
);

export default function Banner() {
  const window = useWindowDimensions();
  const ITEM_SIZE = window.width - 1 * 34;
  const [activeIndicator, setActiveIndicator] = useState(0);
  const onScroll = (evt) => {
    const index = Math.floor(evt.nativeEvent.contentOffset.x / ITEM_SIZE);
    setActiveIndicator(index);
  };

  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      >
        {BannerList.map((item) => (
          <Image
            key={item.id}
            source={item.image}
            style={{ width: ITEM_SIZE }}
            resizeMode="cover"
          />
        ))}
      </ScrollView>
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>20% off on your first purchase</Text>
      </View>
      <View style={styles.DotContainer}>
        {BannerList.map((item, index) => (
          <Dot key={item.id} active={index === activeIndicator} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  TextContainer: {
    width: 137,
    textAlign: "center",
  },
  Text: {
    position: "relative",
    zIndex: 2,
    bottom: 100,
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
    top: 200,
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
