import React, { Component } from "react";
import TopNav from "../symbols/TopNav";
import { Center } from "@builderx/utils";
import SideNav from "../symbols/SideNav";
import { View, Text, StyleSheet } from "react-native";

export default class DayView extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>good morning!</Text>
        <Center horizontal>
          <TopNav style={styles.TopNav} navigation={this.props.navigation} />
        </Center>
        <SideNav style={styles.sideNav} navigation={this.props.navigation} />
        <View style={styles.moods} />
        <View style={styles.factors} />
        <View style={styles.factorChoices}>
          <Text style={styles.add}>+</Text>
          <Text style={styles.c}>C</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  greeting: {
    position: "absolute",
    top: "9.00%",
    left: "5.33%",
    height: "7.95%",
    width: "90.67%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 30,
    fontFamily: "ArialMT"
  },

  TopNav: {
    top: 124.5,
    width: 217,
    height: 27,
    position: "absolute"
  },
  sideNav: {
    top: 65,
    left: 14,
    width: 39,
    height: 150,
    position: "absolute"
  },
  moods: {
    height: 57,
    width: 242,
    top: 220,
    left: 80,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  factors: {
    top: 295,
    width: 242,
    height: 198.96,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)",
    left: "21.87%"
  },
  factorChoices: {
    height: 205,
    width: 236,
    top: 512,
    left: 88,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderWidth: 1,
    borderColor: "green"
  },
  c: {
    top: 20.17,
    left: 53.11,
    width: 40,
    height: 40,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 24,
    fontFamily: "ArialMT",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  add: {
    top: 11,
    left: 116,
    width: 23,
    height: 39,
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 39
  }
});
