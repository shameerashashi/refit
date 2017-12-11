/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid
} from 'react-native';
import SearchPage from './SearchPage';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
	<View style={{flex: 1, flexDirection: 'column'}}>
		<ToolbarAndroid
		  style={styles.toolbar}
		  logo={require('./logo.png')}
		  title="Refit" />
		  
		  <SearchPage />
		  
	</View>
	 )
  }
}

const styles = StyleSheet.create({
	toolbar: {
	   backgroundColor: '#e0e0e0',
	   elevation   : 3,
	   height: 56,
	   alignSelf: 'stretch',
	 },
	description: {
		fontSize: 18,
		textAlign: 'center',
		color: '#656565',
		marginTop: 65,
	},
});
