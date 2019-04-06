import React, { Component } from "react";
import TopNav from "../symbols/TopNav";
import SideNav from "../symbols/SideNav";
import { View, StyleSheet, Text } from "react-native";

export default class WeekView extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TopNav style={styles.TopNav} navigation={this.props.navigation} />
        <SideNav style={styles.sideNav} navigation={this.props.navigation} />
        <View style={styles.dayList}>
          <View style={styles.day}>
            <View style={styles.daySummary} />
            <Text style={styles.dayOfWeek}>Sun</Text>
          </View>
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

  TopNav: {
    top: 52,
    left: 72,
    width: 218,
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
  dayList: {
    height: 606.48,
    width: 237.6,
    top: 97.88,
    left: 76.04,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)"
  },
  day: {
    top: 39,
    left: 58,
    width: 156,
    height: 58,
    position: "absolute"
  },
  daySummary: {
    top: 0,
    left: 28,
    width: 128,
    height: 58,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,1)"
  },
  dayOfWeek: {
    top: 25,
    left: 0,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
