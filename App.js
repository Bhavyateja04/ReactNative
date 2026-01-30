// import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Text, TouchableOpacity, View } from "react-native";
// import { StyleSheet, Image, Button} from "react-native";
// import MyImage from "./assets/download.jpg";

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <TouchableOpacity>
//           <Text style={Mystyles.mytext}>Krishna krishna prema mai radha</Text>
//         </TouchableOpacity>
//         <Image source={MyImage} />
//         <Button title="Click" />
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;

// const Mystyles = StyleSheet.create({
//   mytext: {
//     color: "red",
//     fontSize: 20,
//     fontWeight: "900",
//   },
// });

import react from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import MyImage from "./assets/favicon.png";
import { StatusBar } from "react-native";
import Component from "./Component";
import { SafeAreaProvider } from "react-native-safe-area-context";
const App = () => {
  return (
    <>
      {/* <SafeAreaProvider>
        <Component />
      </SafeAreaProvider> */}
      <SafeAreaProvider>
        <View style={Mystyles.parent}>
          <Text style={Mystyles.mytext}>Testing</Text>
          <View></View>
          <Text style={Mystyles.child}>Aditya university</Text>
        </View>
      </SafeAreaProvider>
    </>
  );
};

export default App;

const Mystyles = StyleSheet.create({
  mytext: {
    backgroundColor: "yellow",
    color: "red",
    fontSize: 20,
    fontWeight: "900",
    width: "100%",
    height: "50%",
  },
  parent: {
    borderWidth: 2,
    borderColor: "black",
  },
  // child:{
  //   color:"blue",
  //   fontSize:30,
  //   backgroundColor:"green",
  //   width:"50%",
  //   height:"50%",
  // }
});
