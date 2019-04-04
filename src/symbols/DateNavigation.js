import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class DateNavigation extends Component {
  // Only for displaying symbol in BuilderX.
  static containerStyle = {
    width: 218,
    height: 27
  };
  render() {

    return (
      <View style={[styles.root, this.props.style]}>
        <Text style={styles.today}>today</Text>
        <Text style={styles.month} onPress={() => this.props.navigation.navigate("MonthView", {}) }>
          month
        </Text>
        <Text style={styles.week}>week</Text>
        <Text style={styles.year}>year</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  today: {
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
    textDecorationLine: "underline",
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
  root: {
    backgroundColor: "rgba(222,133,133,1)",
    opacity: 1
  }
});
