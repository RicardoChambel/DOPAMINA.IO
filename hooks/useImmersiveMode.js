// hooks/useImmersiveMode.js
import { useEffect } from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import * as SystemUI from "expo-system-ui";

export default function useImmersiveMode() {
  useEffect(() => {
    // Esconde status bar (superior)
    StatusBar.setHidden(false, "fade");

    // Esconde barra de navegação (inferior)
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("inset-swipe");
    NavigationBar.setPositionAsync("absolute");

    // Define fundo preto para a UI do sistema
    SystemUI.setBackgroundColorAsync("black");
  }, []);
}
