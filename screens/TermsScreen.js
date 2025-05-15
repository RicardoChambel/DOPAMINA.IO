import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";

export default function TermsScreen() {
  const navigation = useNavigation();
  const [accepted, setAccepted] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const handleAccept = () => {
    setAccepted(true);
  };

  useEffect(() => {
    let timer;
    if (accepted) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            navigation.navigate("QRCodeScreen");
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [accepted]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../assets/img/header.jpg")}
        style={styles.headerImage}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.title}>
          Para prosseguir{"\n"}tem de aceitar{"\n"}os nossos{"\n"}termos e{"\n"}
          condições
        </Text>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={accepted}
            onValueChange={handleAccept}
            color={accepted ? "#C655FF" : undefined}
          />
          <Text style={styles.checkboxLabel}>
            Aceitar <Text style={styles.link}>termos e condições</Text>
          </Text>
        </View>

        {accepted && (
          <>
            <Text style={styles.legalText}>
              Ao aceitar estes termos e condições, o utilizador reconhece e
              aceita que a utilização deste serviço pode impactar não só a saúde
              física e mental, incluindo, mas não se limitando, a estados
              depressivos, problemas cognitivos e, em casos extremos, risco de
              morte. O utilizador assume total responsabilidade pela sua
              utilização do serviço e pelos possíveis efeitos decorrentes do
              mesmo.
            </Text>
            <Text style={styles.nextText}>A avançar em</Text>
            <Text style={styles.count}>{countdown}</Text>
          </>
        )}
      </View>

      <Image
        source={require("../assets/img/chippy4.jpg")}
        style={styles.botImage}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  headerImage: {
    width: 180,
    height: 40,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#601928",
    borderColor: "#b13455",
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    marginTop: 100,
    width: "75%",
    justifyContent: "center",
    alignItems: "left",
  },
  title: {
    fontFamily: "Orbitron",
    fontSize: 18,
    color: "#fff",
    textAlign: "left",
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxLabel: {
    color: "#fff",
    marginLeft: 8,
    fontFamily: "Orbitron",
    fontSize: 12,
  },
  link: {
    textDecorationLine: "underline",
    color: "#C655FF",
  },
  legalText: {
    color: "#ccc",
    marginTop: 10,
    fontSize: 10,
    fontFamily: "Orbitron",
  },
  botImage: {
    width: 300,
    height: 200,
    position: "absolute",
    bottom: 30,
    marginRight: 100,
  },
  nextText: {
    position: "absolute",
    width: "100%",
    color: "#C655FF",
    fontSize: 18,
    marginTop: 500,
    fontStyle: "italic",
    fontWeight: "200",
    alignSelf: "flex-end",
    textAlign: "right",
  },
  count: {
    position: "absolute",
    width: "100%",
    color: "#C655FF",
    fontSize: 18,
    marginTop: 550,
    marginRight: 50,
    fontStyle: "italic",
    fontWeight: "200",
    alignSelf: "flex-end",
    textAlign: "right",
  },
});
