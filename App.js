import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Row, Col } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
  <View name="topApp" style={styles.coco}>
      <View name="blankie" style={{height: 400}}></View>
      <View name="container" style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 300}} name="leftie">
            <Text style={styles.biggie}>FooBar</Text>
            <TextInput style={styles.biggie} placeholder="foo"></TextInput>
          </View>
          <View style={{width: 50}} name="rightie">
          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
            style={{width: 40, height: 40}} />
          </View>
       </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  coco: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  biggie: {
        fontSize: 60,
        fontFamily: 'Courier',
        color: 'green',
  }
});
