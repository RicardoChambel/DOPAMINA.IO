import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

export default function ObjectivesScreen() {
  const [objective, setObjective] = useState("");
  const [objectives, setObjectives] = useState([]);

  const addObjective = () => {
    if (objective.trim()) {
      setObjectives([...objectives, objective]);
      setObjective("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Objetivos</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreve o teu objetivo"
        placeholderTextColor="#aaa"
        value={objective}
        onChangeText={setObjective}
      />
      <TouchableOpacity style={styles.button} onPress={addObjective}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={objectives}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>
            {"\u2022"} {item}
          </Text>
        )}
        contentContainerStyle={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#820AD1",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  item: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 5,
  },
});
