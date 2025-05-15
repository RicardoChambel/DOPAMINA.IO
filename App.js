import { useEffect, useRef, useState, useCallback } from "react";
import { StyleSheet, Animated } from "react-native";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import useImmersiveMode from "./hooks/useImmersiveMode";
import useNavigationConfig from "./hooks/useNavigationConfig";

function SplashOverlay({ onFinish }) {
  const slideAnim = useRef(new Animated.Value(-20)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(onFinish);
      }, 700);
    });
  }, []);

  return (
    <Animated.View style={[styles.splashContainer, { opacity: fadeAnim }]}>
      <Animated.Text
        style={[
          styles.title,
          {
            transform: [{ translateX: slideAnim }],
            fontFamily: "OrbitronBold",
            color: "rgb(203, 203, 203)",
          },
        ]}
      >
        DOPAMINA.IO
      </Animated.Text>
    </Animated.View>
  );
}

export default function App() {
  useImmersiveMode();

  const [fontsLoaded] = useFonts({
    Orbitron: require("./assets/fonts/Orbitron/Orbitron-Regular.ttf"),
    OrbitronBold: require("./assets/fonts/Orbitron/Orbitron-Bold.ttf"),
  });

  const [showSplash, setShowSplash] = useState(true);
  const onFinish = useCallback(() => setShowSplash(false), []);
  const { theme, Navigator } = useNavigationConfig();

  if (!fontsLoaded) return null;

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "#000" }}>
      {showSplash ? (
        <SplashOverlay onFinish={onFinish} />
      ) : (
        <NavigationContainer theme={theme}>
          <Navigator />
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    textAlign: "center",
  },
});
