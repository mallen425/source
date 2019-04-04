import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class YearView extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.today}>today</Text>
        <Text style={styles.month}>month</Text>
        <Text style={styles.week}>week</Text>
        <Text style={styles.year}>year</Text>
        <Text style={styles.style}>?</Text>
        <Text style={styles.r}>R</Text>
        <Text style={styles.s}>S</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  today: {
    position: "absolute",
    top: "6.30%",
    left: "22.93%",
    height: "3.30%",
    width: "10.40%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "ShreeDev0714-Italic"
  },
  month: {
    position: "absolute",
    top: "6.30%",
    left: "52.53%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "ShreeDev0714-Italic"
  },
  week: {
    position: "absolute",
    top: "6.30%",
    left: "37.87%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "ShreeDev0714-Italic"
  },
  year: {
    position: "absolute",
    top: "6.30%",
    left: "69.07%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "ShreeDev0714-Italic",
    textDecorationLine: "underline"
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
    fontFamily: "ShreeDev0714"
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
    fontFamily: "ShreeDev0714"
  },
  s: {
    position: "absolute",
    top: "24.14%",
    left: "7.33%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "ShreeDev0714"
  }
});
