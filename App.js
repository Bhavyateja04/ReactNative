import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet, Image, Button} from "react-native";
import MyImage from "./assets/download.jpg";

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity>
          <Text style={Mystyles.mytext}>Krishna krishna prema mai radha</Text>
        </TouchableOpacity>
        <Image source={MyImage} />
        <Button title="Click" />
      </View>
    </SafeAreaView>
  );
};
export default App;

const Mystyles = StyleSheet.create({
  mytext: {
    color: "red",
    fontSize: 20,
    fontWeight: "900",
  },
});
