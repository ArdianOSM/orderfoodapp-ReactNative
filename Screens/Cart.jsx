import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Cart = () => {
  const food = [
    {
      name: "Pizza",
      price: 250,
    },
    {
      name: "Burger",
      price: 350,
    },
  ];
  return (
    <View
      style={{
        paddingTop: 50,
        paddingHorizontal: 25,
        gap: 20,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "500" }}>2 Items in Cart</Text>
      <View style={{ height: 300 }}>
        <FlatList
          data={food}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: 130,

                  borderRadius: 20,
                  marginBottom: 15,
                  flexDirection: "row",
                  gap: 20,
                  paddingHorizontal: 10,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#f0edf8",
                    width: "35%",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{ width: 90, height: 90 }}
                    source={require("../assets/burgericon.png")}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    justifyContent: "space-between",

                    borderRadius: 20,
                  }}
                >
                  <View style={{ gap: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: Colors.primary,
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      {item.price}€
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="pluscircle" size={22} color="green" />
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        color: "black",
                      }}
                    >
                      1
                    </Text>
                    <AntDesign name="minuscircle" size={22} color="red" />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>

      <Text style={{ fontSize: 22, fontWeight: "500" }}>
        Order Instructions
      </Text>

      <View
        style={{
          height: 90,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "black",
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <TextInput style={{ height: 60, fontSize: 17 }} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "500" }}>Total:</Text>
        <Text
          style={{ color: Colors.primary, fontSize: 16, fontWeight: "800" }}
        >
          100€
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: Colors.primary,
          height: 55,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text style={{ color: "white", fontSize: 19, fontWeight: "700" }}>
          Checkout
        </Text>
      </TouchableOpacity>

      <Text
        onPress={() => {
          console.log("Clicked");
        }}
        style={{ textAlign: "center", fontSize: 19, fontWeight: 400 }}
      >
        Back To Menu
      </Text>
    </View>
  );
};

export default Cart;
