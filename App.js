// import React from "react";
// import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { StyleSheet, Image, Button} from "react-native";
// import Component1 from  "./Component";
// const App = () => {
//   return (
//     <>
//     <SafeAreaView style={Mystyles.safeArea}></SafeAreaView>
//     <SafeAreaProvider>
//        < Component1 />
//     </SafeAreaProvider>
//     </>
//   );
// };
// export default App;

// const Mystyles = StyleSheet.create({
//   safeArea: {
//     color:"green",
//     backgroundColor:"green",
//     height:50,
//     width:"100%"
//   },
// });

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
      import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-paper';
import Home from './Home';
import Contact from './Contact';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Icon} from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createNativeStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        // title:"HAI"
        // headerShown:false
        // headerStyle:{
        //   backgroundColor:"red"
        // }
        // headerTintColor:"red"
        // headerTitleStyle:{
        //   fontSize:26
        // }
        headerTitleAlign:"center",
        headerRight:()=> <Icon source={"bell"} size={24}/>,
        // headerLeft:() => <Icon source={"home"} size={24}/>,
        headerBackButtonDisplayMode:"minimal",
        animation:"fade"

      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}


