import React, { Component } from "react";
import TopNav from "../symbols/TopNav";
import SideNav from "../symbols/SideNav";
import { View, StyleSheet, Text } from "react-native";
import { withNavigationFocus } from "react-navigation";

class YearView extends Component {
  render() {
    //const navigate  = this.props.navigation;
    if (this.props.navigation.isFocused) console.warn("Year");
    return (
      <View style={styles.root}>
        <SideNav style={styles.sideNav} navigation={this.props.navigation} />
        {this.props.navigation.isFocused}
        <TopNav style={styles.TopNav} navigation={this.props.navigation} />
        <View style={styles.year}>
          <View style={styles.month}>
            <View style={styles.dayList} />
            <Text style={styles.m}>J</Text>
          </View>
        </View>
        <Text style={styles.yearRange}>2019</Text>
      </View>
    );
  }
}

export default withNavigationFocus(YearView);

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },

  week: {
    position: "absolute",
    top: "6.30%",
    left: "37.87%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    fontFamily: "ArialMT"
  },

  TopNav: {
    top: 52,
    left: 72,
    width: 218,
    height: 27,
    position: "absolute"
  },
  sideNav: {
    position: "absolute",
    top: 65,
    left: 14,
    height: 150,
    width: 39
  },
  year: {
    height: 602,
    width: 266.83,
    top: 141,
    left: 72,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)"
  },
  yearRange: {
    top: 107.56,
    left: 137.1,
    position: "absolute",
    backgroundColor: "transparent"
  },
  month: {
    top: 19,
    left: 15,
    width: 23,
    height: 564,
    position: "absolute"
  },
  dayList: {
    top: 12,
    left: 0,
    width: 23,
    height: 552,
    position: "absolute",
    backgroundColor: "rgb(230,230,230)",
    borderWidth: 1,
    borderColor: "green"
  },
  m: {
    top: 0,
    left: 7,
    position: "absolute",
    backgroundColor: "transparent"
  }
});
