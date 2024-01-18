import React from "react";
import Home from "./Home";
import Profle from "./Profile";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NativeModules } from "react-native";
import NavBar from "../../components/NavBar";

const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labeled={false}
      activeIndicatorStyle={{ backgroundColor: "white" }}
      barStyle={{ backgroundColor: "white", height: 55 }}
      children={(children) => (
        <>
          <NavBar />
          {children}
        </>
      )}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarColor: "blue",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Profle}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="plus"
              color={color}
              size={40}
              style={{
                marginTop: -15,
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profle}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
