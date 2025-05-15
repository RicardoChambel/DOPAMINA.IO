// hooks/useNavigationConfig.js
import React from "react";
import { DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa os teus ecrãs
import HomeScreen from "../screens/HomeScreen";
import QRCodeScreen from "../screens/QRCodeScreen";
import ObjectivesScreen from "../screens/ObjectivesScreen";
import TermsScreen from "../screens/TermsScreen";

// Tema personalizado
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#000",
  },
};

// Cria o Stack Navigator
const Stack = createNativeStackNavigator();

export default function useNavigationConfig() {
  const Navigator = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
        contentStyle: { backgroundColor: "#000" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      <Stack.Screen name="ObjectivesScreen" component={ObjectivesScreen} />
      <Stack.Screen name="Terms" component={TermsScreen} />
    </Stack.Navigator>
  );

  return { theme: MyTheme, Navigator };
}
