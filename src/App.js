import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Angel Directory</Text>
        <Text style={styles.h2}>To My Thots Who Tryna Pay Me To Fuck,</Text>
        <br />
        <br />
        <Text style={styles.paragraph}>
          Open Expo on your mobile device with scanning the QR code in the
          application log under the start tab.
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 8,
    fontSize: 16,
    textAlign: "center",
  },
  h1: {
    margin: 28,
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
  },
  h2: {
    margin: 16,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
});
