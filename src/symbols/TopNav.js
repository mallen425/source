import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class TopNav extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 218,
    height: 27
  };
  render() {
    let routeName = this.props.navigation.state.routeName;
    return (
      <View style={[styles.root, this.props.style]}>
        <Text
          style={[styles.today, , routeName === "DayView" && styles.underline]}
          onPress={() =>
            routeName === "DayView"
              ? false
              : this.props.navigation.navigate("DayView", {})}
        >
          today
        </Text>
        <Text
          style={[styles.month, routeName === "MonthView" && styles.underline]}
          onPress={() =>
            routeName === "MonthView"
              ? false
              : this.props.navigation.navigate("MonthView", {})}
        >
          month
        </Text>
        <Text
          style={[styles.week, routeName === "WeekView" && styles.underline]}
          onPress={() =>
            routeName === "WeekView"
              ? false
              : this.props.navigation.navigate("WeekView", {})}
        >
          week
        </Text>
        <Text
          style={[styles.year, routeName === "YearView" && styles.underline]}
          onPress={() =>
            routeName === "YearView"
              ? false
              : this.props.navigation.navigate("YearView", {})}
        >
          year
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  label: {
    top: "0%",
    left: "0%",
    width: "25.23%",
    height: "100%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "ArialMT",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  month: {
    top: "0%",
    left: "57.34%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "ArialMT",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  week: {
    top: "0%",
    left: "32.11%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "ArialMT",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  year: {
    top: "0%",
    left: "85.78%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 16,
    fontFamily: "ArialMT",
    textAlign: "center",
    color: "rgba(0,0,0,1)"
  },
  underline: {
    textDecorationLine: "underline"
  },
  root: {
    backgroundColor: "rgba(248,231,28,1)",
    opacity: 1
  }
});
