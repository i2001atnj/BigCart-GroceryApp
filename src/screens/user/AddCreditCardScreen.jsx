import { StyleSheet, View, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import CreditCardItem from "../../components/CreditCardItem";
import Header from "../../components/Header";
import { userContext } from "../../context/userContext";
import InputComponent from "../../components/Input";
import { card, user2, calendar, lockVector } from "../../assets";

const AddCreditCardScreen = () => {
  const user = useContext(userContext);
  return (
    <SafeAreaView
      style={{ height: "100%", backgroundColor: "#fff", width: "100%" }}
    >
      <Header
        returnArrow
        title="Add Card"
        titleStyle={{ marginRight: "40%" }}
      />
      <View
        style={{
          backgroundColor: "#F4F5F9",
          height: "100%",
          alignItems: "center",
          width: "100%",
        }}
      >
        <CreditCardItem
          cardBank="Master Card"
          cardNumber={"XXX XXX XXX XXX"}
          cardHolder={user.email}
          cardExpireDate="01/28"
          style={{ marginTop: 33 }}
        />
        <View style={{ width: "100%", gap: 5, marginTop: 18 }}>
          <InputComponent image={user2} placeholder="Name on the card" />
          <InputComponent image={card} placeholder="XXXX XXXX XXXX XXXX" />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              paddingHorizontal: 17,
            }}
          >
            <InputComponent
              image={calendar}
              style={{ width: "49%", marginHorizontal: 0 }}
              placeholder="Month / Year"
            />
            <InputComponent
              image={lockVector}
              style={{ width: "49%", marginHorizontal: 0 }}
              placeholder="CVV"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddCreditCardScreen;

const styles = StyleSheet.create({});
