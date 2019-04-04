import React, { Component } from "react";
import DateNavigation from "../symbols/DateNavigation";
import { View, Text, StyleSheet } from "react-native";

export default class WeekView extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.style}>?</Text>
        <Text style={styles.r}>R</Text>
        <Text style={styles.s}>S</Text>
        <DateNavigation style={styles.dateNavigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },

  style: {
    position: "absolute",
    top: "7.95%",
    left: "4.53%",
    height: "4.05%",
    width: "8.53%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "ArialMT"
  },
  r: {
    position: "absolute",
    top: "16.04%",
    left: "3.73%",
    height: "4.05%",
    width: "10.40%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "ArialMT"
  },
  s: {
    position: "absolute",
    top: "24.14%",
    left: "7.33%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "ArialMT"
  },
  dateNavigation: {
    top: 52,
    left: 72,
    width: 218,
    height: 27,
    position: "absolute"
  }
});
