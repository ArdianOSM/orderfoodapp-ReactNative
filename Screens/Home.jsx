import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

import Header from "../components/Header";
import Search from "../components/Search";

import Category from "../components/Category";
import Banner from "../components/Banner";
import Fooditems from "../components/Fooditems";

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 50,
      }}
    >
      <SafeAreaView>
        <Header />
        <Search />
        <Category />
        <Banner />
        <Fooditems />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
