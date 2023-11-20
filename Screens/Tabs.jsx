import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Searches from "./Searches";
import Profile from "./Profile";
import Cart from "./Cart";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <View
                style={{
                  backgroundColor:'',
                  width: 35,
                  height: 35,
                }}
              >
                <Ionicons name="md-home" size={24} color="black" />
              </View>
            ) : (
              <Ionicons name="md-home-outline" size={24} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Searches}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="search" size={24} color="black" />
            ) : (
              <Ionicons name="search" size={24} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Foundation name="shopping-cart" size={24} color="black" />
            ) : (
              <Foundation name="shopping-cart" size={24} color="grey" />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="ios-person" size={24} color="black" />
            ) : (
              <Ionicons name="ios-person-outline" size={24} color="grey" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
