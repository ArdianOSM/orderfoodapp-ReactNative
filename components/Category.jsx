import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Colors } from "../utils/Colors";

const Category = () => {
  const [selected, setselected] = useState();
  const data = [
    "All",
    "Burger",
    "Pizza",
    "Desserts",
    "Drinks",
    "Fruits",
    "Vegetables",
    "Beverages",
    "Other",
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          onPress={() => {
            setselected(index);
          }}
          activeOpacity={0.9}
          style={{ margin: 10, }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              backgroundColor: selected === index ? Colors.primary : "#E3E3E3",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              gap:50,
            }}
          >
            <Image
              style={{ width: 50, height: 50, height: 60 }}
              source={require("../assets/burgericon.png")}
            />
          </View>

          <Text
            style={{
              marginTop: 5,
              textAlign: "center",
              color: selected == index ? Colors.primary : "grey",
            }}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Category;
