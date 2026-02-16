import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, Button} from "react-native";
import Component from "./Component";

const App = () => {
  return (
    <>
    <SafeAreaView style={Mystyles.safeArea}></SafeAreaView>
    <SafeAreaProvider>
       < Component />
    </SafeAreaProvider>
    </>
  );
};
export default App;

const Mystyles = StyleSheet.create({
  safeArea: {
    color:"green",
    backgroundColor:"green",
    height:50,
    width:"100%"
  },
});

// import react from "react";
// import {
//   View,
//   Text,
//   Button,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   FlatList,
// } from "react-native";
// import MyImage from "./assets/favicon.png";
// import { StatusBar ,FlatList,Image} from "react-native";
// import Component from "./Component";
// import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
// const App = () => {
//   return (
//     <>
      {/* {/* <SafeAreaProvider>
        <Component />
      </SafeAreaProvider> */}
      {/* <SafeAreaProvider>
        <View style={Mystyles.parent}>
          {/* <Text style={Mystyles.mytext}>Testing</Text> */}
          {/* <View>
          <Text style={Mystyles.child}>AdityaUniversity</Text>
          </View>
        </View>
      </SafeAreaProvider> */} 
      {/* <StatusBar barStyle="dark-content" backgroundColor="blue" />
      <Text>Testing StatusBar</Text> */} 
