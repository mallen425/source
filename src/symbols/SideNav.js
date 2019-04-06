import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SideNav extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 39,
    height: 151
  };
  render() {
    return (
      <View style={[this.props.style]}>
        <Text style={styles.help}>?</Text>
        <Text style={styles.r}>R</Text>
        <Text
          style={styles.s}
          onPress={() => {
            this.props.navigation.push("disabled");
          }}
        >
          S
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  help: {
    top: "0%",
    left: "7.69%",
    width: "82.05%",
    height: "22%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "ArialMT",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  r: {
    top: "43.33%",
    left: "0%",
    width: "100%",
    height: "22%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "ArialMT",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  s: {
    top: "87.33%",
    left: "35.9%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 20,
    fontFamily: "ArialMT",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  }
});
