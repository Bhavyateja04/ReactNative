import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Contact from "./Contact";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // important

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: "red",
          drawerInactiveTintColor: "black",
          drawerActiveBackgroundColor: "black",
          drawerInactiveBackgroundColor: "red",
          drawerPosition: "right",

          drawerLabelStyle: {
            fontSize: 16,
          },

          drawerItemStyle: {
            marginVertical: 5,
            borderRadius: 10,
          },

          drawerStyle: {
            width: 200,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="Contact"
          component={Contact}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="account" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}