import React from "react";
import { Text, View, StyleSheet } from "react-native";
import GlobalStyles from "../constants/styles/GlobalStyles.js";

Cafe = () => {
  return (
    <View style={GlobalStyles.view}>
      <Text style={{ fontSize: 18 }}>
        Props works the same way as Props in React.
      </Text>
      <View style={GlobalStyles.codeContainer}>
        <Text>
          {`const someFunction = (props) => {
            return (
              <View>
                <Text>Hello, {props.name}</Text>
              </View>
            )
          }`}
        </Text>
      </View>
      <Text>
        Most of React Native’s Core Components can be customized with props,
        too. For example, when using Image, you pass it a prop named source to
        define what image it shows:
      </Text>
      <View style={GlobalStyles.codeContainer}>
        <Text>
          {`const CatApp = () => {
              return (
                <View>
                  <Image
                    source={{uri: "https://..."}}
                    style={{width: 200, height: 200}}
                  />
                  <Text>Hello, I am your cat!</Text>
                </View>
              );
          }`}
        </Text>
      </View>
    </View>
  );
};

//https://reactnative.dev/docs/intro-react#props
export default function PropsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>PropsDemo</Text>
      <Cafe />
    </View>
  );
}

const styles = StyleSheet.create({
  ...GlobalStyles,
});
