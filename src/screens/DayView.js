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
        <Text style={styles.c}>C</Text>
        <Text style={styles.c1}>C</Text>
        <Text style={styles.c2}>C</Text>
        <Text style={styles.c3}>C</Text>
        <Text style={styles.c4}>C</Text>
        <Text style={styles.c5}>C</Text>
        <Text style={styles.c6}>C</Text>
        <Text style={styles.c7}>C</Text>
        <Text style={styles.c8}>C</Text>
        <Text style={styles.c9}>C</Text>
        <Text style={styles.c10}>C</Text>
        <Text style={styles.c11}>C</Text>
        <Text style={styles.c12}>C</Text>
        <Text style={styles.c13}>C</Text>
        <Text style={styles.c14}>C</Text>
        <Text style={styles.c15}>C</Text>
        <Text style={styles.c16}>C</Text>
        <Text style={styles.c17}>C</Text>
        <Text style={styles.c18}>C</Text>
        <Text style={styles.c19}>C</Text>
        <Center horizontal>
          <TopNav           style={styles.TopNav}
          navigation={this.props.navigation}
 />
        </Center>
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

  c: {
    position: "absolute",
    top: "88.91%",
    left: "24.00%",
    height: "4.80%",
    width: "10.67%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c1: {
    position: "absolute",
    top: "88.91%",
    left: "67.73%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c2: {
    position: "absolute",
    top: "81.86%",
    left: "67.73%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c3: {
    position: "absolute",
    top: "81.86%",
    left: "54.13%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c4: {
    position: "absolute",
    top: "81.86%",
    left: "40.53%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c5: {
    position: "absolute",
    top: "81.86%",
    left: "26.93%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c6: {
    position: "absolute",
    top: "88.91%",
    left: "54.13%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c7: {
    position: "absolute",
    top: "74.81%",
    left: "67.73%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c8: {
    position: "absolute",
    top: "74.81%",
    left: "54.13%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c9: {
    position: "absolute",
    top: "74.81%",
    left: "40.53%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c10: {
    position: "absolute",
    top: "74.81%",
    left: "26.93%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c11: {
    position: "absolute",
    top: "88.91%",
    left: "40.53%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c12: {
    position: "absolute",
    top: "67.77%",
    left: "67.73%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c13: {
    position: "absolute",
    top: "88.91%",
    left: "81.33%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c14: {
    position: "absolute",
    top: "81.86%",
    left: "81.33%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c15: {
    position: "absolute",
    top: "74.81%",
    left: "81.33%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c16: {
    position: "absolute",
    top: "67.77%",
    left: "81.33%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c17: {
    position: "absolute",
    top: "67.77%",
    left: "54.13%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c18: {
    position: "absolute",
    top: "67.77%",
    left: "40.53%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "ArialMT"
  },
  c19: {
    position: "absolute",
    top: "67.77%",
    left: "26.93%",
    backgroundColor: "transparent",
    textAlign: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 24,
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
  }
});
