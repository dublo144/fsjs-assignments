import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../constants/styles/GlobalStyles";

//https://reactnative.dev/docs/state
StateDemo = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={GlobalStyles.view}>
      <Text>Current count: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View>
    </View>
  );
};

//https://reactnative.dev/docs/touchableopacity
export default function StateScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>State Demo</Text>
      <StateDemo />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
});
