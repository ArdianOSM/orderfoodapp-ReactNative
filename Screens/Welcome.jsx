import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../utils/Colors";

const Welcome = () => {
  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      colors={[Colors.primary, Colors.secondary]}
    >
      <View
        style={{
          width: 300,
          height: 300,
          backgroundColor: "opacity: 0.5",
          borderRadius: 300,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 250, height: 240 }}
          source={require("../assets/burgericon.png")}
        />
      </View>

      <View>
        <Text
          style={{
            fontSize: 40,
            color: "darkcyan",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 40,
          }}
        >
          Mos e le{"\n"} Pa e provu...
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log("hello");
        }}
        style={{
          backgroundColor: "crimson",
          width: 180,
          height: 55,
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: Colors.primary,
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          Regjistrohu
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Welcome;
