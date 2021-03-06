/*
Mr Tran Hong Khanh
Email: khanhcd97@gmail.com
màn hình công cụ
*/
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import HeaderNews from '../components/headerNews';
const window = Dimensions.get('window');
export default class Tools extends Component {
  componentDidMount() {}
  render() {
    return (
      <SafeAreaView style={styles.container}>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Platform.OS === 'ios' ? 34 : 26,
  },
  header: {
    flex: 1,
    backgroundColor: '#F48FB1',
  },
  content: {
    flex: 11,
  },
});
