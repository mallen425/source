import React, { Component } from "react";
import DateNavigation from "../symbols/DateNavigation";
import { View, Text, StyleSheet } from "react-native";

export default class MonthView extends Component {
  render() {
    return (
      <View style={styles.root}>
        <DateNavigation style={styles.dateNavigation} />
        <Text style={styles.style}>?</Text>
        <Text style={styles.r}>R</Text>
        <Text style={styles.s}>S</Text>
        <Text style={styles.sEPTEMBER}>
          S{"\n"}E{"\n"}P{"\n"}T{"\n"}E{"\n"}M{"\n"}B{"\n"}E{"\n"}R
        </Text>
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
  sEPTEMBER: {
    position: "absolute",
    top: "14.54%",
    left: "67.47%",
    height: "100.3%",
    width: "19.2%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 45,
    fontFamily: "ArialMT"
  },
  dateNavigation: {
    position: "absolute",
    top: 52,
    left: 72,
    height: 27,
    width: 218
  }
});
