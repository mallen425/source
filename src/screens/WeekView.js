import React, { Component } from "react";
import TopNav from "../symbols/TopNav";
import SideNav from "../symbols/SideNav";
import { View, StyleSheet } from "react-native";

export default class WeekView extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TopNav           style={styles.TopNav}
          navigation={this.props.navigation}
 />
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
  }
});
