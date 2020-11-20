import React from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goals, setGoals] = React.useState([]);
  const [newGoal, setNewGoal] = React.useState();

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={"Add goal"}
          style={styles.input}
          onChangeText={(text) => setNewGoal(text)}
          value={newGoal}
        />
        <Button
          title={"Add"}
          onPress={() =>
            setGoals([
              ...goals,
              { key: Math.random().toString(), value: newGoal },
            ])
          }
        />
      </View>
      <FlatList
        data={goals}
        renderItem={(data) => (
          <View style={styles.listItem}>
            <Text>{data.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 48,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "80%",
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
