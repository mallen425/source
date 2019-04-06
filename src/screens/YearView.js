import React, { Component } from "react";
import TopNav from "../symbols/TopNav";
import SideNav from "../symbols/SideNav";
import { View, StyleSheet } from "react-native";
import { withNavigationFocus } from "react-navigation";

class YearView extends Component {
  render() {
    //const navigate  = this.props.navigation;
    if (this.props.navigation.isFocused) console.warn("Year");
    return (
      <View style={styles.root}>
        <SideNav style={styles.sideNav} navigation={this.props.navigation} />
        {this.props.navigation.isFocused}
        <TopNav
          style={styles.TopNav}
          navigation={this.props.navigation}
        />
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
  }
});
