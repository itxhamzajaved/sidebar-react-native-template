import { View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Routes from "./Routes";
import { Home, Settings } from "../Screens";
import { useTheme } from "react-native-paper";
import DrawerContent from "../Components/DrawerContent";

const DrawerStack = createDrawerNavigator();

const Drawer = () => {
  let theme = useTheme();
  return (
    <DrawerStack.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: theme?.colors?.background,
          width: 240,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: theme?.colors?.text,
        },
        headerTintColor: theme?.colors?.text,
        drawerContentStyle: theme?.colors?.text,
        drawerPosition: "left",
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <DrawerStack.Screen
        name={Routes.HOME}
        component={Home}
        initialParams={{ icon: "home" }}
      />
      <DrawerStack.Screen
        name={Routes.SETTINGS}
        component={Settings}
        initialParams={{ icon: "settings" }}
      />
    </DrawerStack.Navigator>
  );
};

export default Drawer;
