import React, { Component } from "react";
import TopNav from "../symbols/TopNav";
import { Center } from "@builderx/utils";
import SideNav from "../symbols/SideNav";
import { View, Text, StyleSheet } from "react-native";

export default class MonthView extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TopNav style={styles.TopNav} navigation={this.props.navigation}/>
        <Text style={styles.monthName}>S E P T E M B E R</Text>
        <SideNav style={styles.sideNav} navigation={this.props.navigation} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },

  monthName: {
    position: "absolute",

    left: "70.6%",
    height: 566,
    width: "16.33%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 45,
    fontFamily: "ArialMT",
    top: "17.98%"
  },
  TopNav: {
    position: "absolute",
    top: 52,
    left: 72,
    height: 27,
    width: 218
  },
  sideNav: {
    top: 65,
    left: 14,
    width: 39,
    height: 150,
    position: "absolute"
  }
});
