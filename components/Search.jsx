import { View, Text, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Search = () => {
  return (
    <View
      style={{
        backgroundColor: "#E3E3E3",
        height: 50,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
      }}
    >
      <Feather name="search" size={24} color="white" />
      <TextInput style={{ flex: 0.9, fontSize: 17 }} placeholder="Search" />
    </View>
  );
};

export default Search;
