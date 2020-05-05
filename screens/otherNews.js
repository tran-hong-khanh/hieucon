/*
Mr Tran Hong Khanh
Email: khanhcd97@gmail.com
màn hình thông tin khác
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
const window = Dimensions.get('window');

export default class OtherNews extends Component {
  componentDidMount() {}
  render() {
    return <SafeAreaView style={styles.container}></SafeAreaView>;
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
