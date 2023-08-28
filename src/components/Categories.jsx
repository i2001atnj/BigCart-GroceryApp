import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { CATEGORIES } from "../data/categories";
import SectionRedirect from "./SectionRedirect";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <SectionRedirect title="Categories" screen="Categories" />
      <ScrollView
        horizontal
        style={styles.CategoriesMenu}
        showsHorizontalScrollIndicator={false}
      >
        {CATEGORIES.map((item) => (
          <View key={item.id} style={styles.Category}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Category", {
                  id: item.id,
                  name: item.name,
                  image: item.image,
                  color: item.color,
                })
              }
              style={{
                backgroundColor: `${item.color}`,
                width: 52,
                height: 52,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={item.image} />
            </TouchableOpacity>
            <Text style={styles.CategoryTitle}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 17,
    gap: 17,
  },
  CategoriesMenu: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    gap: 20,
  },
  Category: {
    alignItems: "center",
    width: 75,
    gap: 10,
  },
  CategoryTitle: {
    fontWeight: 500,
    fontSize: 13,
    color: "#868889",
  },
});
