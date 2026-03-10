// import react from "react";
// // import View from "react-native"
// import { Text,Button } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// const Home = () =>{
//     const Navigation = useNavigation()
//     return(
//         <>
//             <Text>Home Screen</Text>
//             <Button 
//                 onPress={
//                     ()=>{
//                         Navigation.navigate("Contact",{
//                             "userId" : 123
//                         })
//                         }
//                     }>
//                     Move to Contact Page</Button>
//         </>
//     )
// }
// export default Home;

// import react from "react";
// // import View from "react-native"
// import { Text,Button } from "react-native-paper";
// import { useNavigation } from "@react-navigation/native";
// const Home = () =>{
//     const Navigation = useNavigation()
//     return(
//         <>
//             <Text>Home Screen</Text>
//             <Button 
//                 onPress={()=>{
//                     Navigation.navigate("Settings")
//                 }}>
//                     Move to setting Page</Button>
//         </>
//     )
// }
// export default Home;

import React, { useState } from "react";
import { View,Text } from "react-native";
import { Button } from "react-native-paper";
import * as LocalAuthentication from "expo-local-authentication"
export default function App() {
  const Open = async() =>{
    const status = await LocalAuthentication.hasHardwareAsync()
    console.log("hardware",status)
    const isEnrolled = await LocalAuthentication.isEnrolledAsync()
    console.log("Enrolled",isEnrolled)
    const result = await LocalAuthentication.authenticateAsync()
    console.log(result)
  }
  return (
    <View style={{ marginTop: 100 }}>
      <Button onPress={Open}>Click</Button>
    </View>
  );
}