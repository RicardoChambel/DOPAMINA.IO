import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PairingScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={require("../assets/img/header.jpg")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Emparelhe o seu chip à aplicação</Text>

        <View style={styles.qrContainer}>
          <Image
            source={require("../assets/img/mock-up.jpg")}
            style={styles.qrImage}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.subtitle}>
          Leia o QR Code ou use o NFC com o seu dispositivo
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerImage: {
    width: 180,
    height: 40,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontFamily: "Orbitron",
    fontSize: 18,
    color: "#fff",
    textAlign: "left",
    marginBottom: 30,
    width: "70%",
  },
  qrContainer: {
    width: 270,
    height: 270,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  qrImage: {
    width: 280,
    height: 280,
    borderRadius: 10,
  },
  subtitle: {
    fontFamily: "Orbitron",
    fontSize: 17,
    color: "#fff",
    textAlign: "left",
    marginTop: 30,
    width: "70%",
  },
  corner: {
    position: "absolute",
    width: 30,
    height: 30,
    borderColor: "#C655FF",
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 4,
    borderLeftWidth: 4,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 4,
    borderRightWidth: 4,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 4,
    borderRightWidth: 4,
  },
});
