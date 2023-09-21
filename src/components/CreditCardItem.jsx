import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { dots, masterCard } from "../assets/icons/index";
import { LinearGradient } from "expo-linear-gradient";

const CreditCardItem = ({
  style,
  cardBank,
  cardNumber,
  cardHolder,
  cardExpireDate,
}) => {
  return (
    <View style={[styles.Card, style]}>
      <LinearGradient
        colors={["#AEDC81", "#6CC51D"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%", width: "100%", borderRadius: 10 }}
      >
        <View style={styles.CardHeader}>
          {cardBank === "Master Card" ? (
            <Image
              style={{ height: 44, width: 54, resizeMode: "contain" }}
              source={masterCard}
            />
          ) : (
            <></>
          )}
          <TouchableOpacity>
            <Image source={dots} />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: "#fff",
            marginLeft: 21,
            fontWeight: 500,
          }}
        >
          {cardNumber}
        </Text>
        <View style={styles.CardBottomInfo}>
          <View>
            <Text style={{ color: "#fff", fontSize: 10 }}>CARD HOLDER:</Text>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>
              {cardHolder}
            </Text>
          </View>
          <View>
            <Text style={{ color: "#fff", fontSize: 10 }}>EXPIRES:</Text>
            <Text style={{ color: "#fff", fontSize: 15, fontWeight: 600 }}>
              {cardExpireDate}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default CreditCardItem;

const styles = StyleSheet.create({
  Card: {
    height: "23%",
    width: "100%",
  },
  CardHeader: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CardBottomInfo: {
    marginTop: 40,
    marginHorizontal: 21,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
