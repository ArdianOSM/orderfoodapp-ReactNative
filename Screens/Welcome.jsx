import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const nav = useNavigation();
  return (
    <LinearGradient
      style={{ flex: 1, justifyContent: "space-evenly", alignItems: "center" }}
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
          top: 50,
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
            letterSpacing: 0,
            top: -5,
          }}
        >
          Mos e le{"\n"} Pa e provu...
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          nav.navigate("Home");
        }}
        style={{
          backgroundColor: "crimson",
          width: 200,
          height: 55,
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default Welcome;
