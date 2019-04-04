import React from "react";
import { YellowBox } from "react-native";
import { Font } from "expo";
import YearView from "./src/screens/YearView";
import MonthView from "./src/screens/MonthView";
import WeekView from "./src/screens/WeekView";
import TodayView from "./src/screens/TodayView";

import { StackNavigator, DrawerNavigator } from "react-navigation";
const DrawerNavigation = DrawerNavigator({
  YearView: {
    screen: YearView
  },
  MonthView: {
    screen: MonthView
  },
  WeekView: {
    screen: WeekView
  },
  TodayView: {
    screen: TodayView
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    YearView: {
      screen: YearView
    },
    MonthView: {
      screen: MonthView
    },
    WeekView: {
      screen: WeekView
    },
    TodayView: {
      screen: TodayView
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  async componentDidMount() {
    await Font.loadAsync({
      "ShreeDev0714-Italic": require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/,
      ShreeDev0714: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? <StackNavigation /> : <Expo.AppLoading />;
  }
}
