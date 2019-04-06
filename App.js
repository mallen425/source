import React from "react";
import { Provider } from "react-redux";
import store from "./src/js/store/index";
import { YellowBox } from "react-native";
import { Font } from "expo";
import YearView from "./src/screens/YearView";
import MonthView from "./src/screens/MonthView";
import WeekView from "./src/screens/WeekView";
import DayView from "./src/screens/DayView";

import {
  StackNavigator,
  DrawerNavigator,
  createAppContainer
} from "react-navigation";
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
  DayView: {
    screen: DayView
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
    DayView: {
      screen: DayView
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
      ArialMT: require("./src/assets/fonts/Arial.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
    <Provider store={store}>
    { this.state.fontLoaded ? 
    <StackNavigation/> : <Expo.AppLoading />}
    </Provider>
    
    );
  }
}
