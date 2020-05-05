/*
Mr Tran Hong Khanh
Email: khanhcd97@gmail.com
màn hình thông tin user
*/
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
const window = Dimensions.get('window');
export default class NotificationComponent extends Component {
  componentDidMount() {}
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{}}
            onPress={() => {
              this.props.navigation.navigate('TopTabheader');
            }}>
            <Image
              source={require('../images/logo.png')}
              style={styles.logoimage}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Thông báo</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  header: {
    backgroundColor: '#F48FB1',
    flexDirection: 'row',
    width: window.width,
    height: 55,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  logoimage: {
    width: 50,
    height: 50,
    margin: 5,
    //borderRadius: 50,
  },
  headerText: {
    fontSize: 20,
    color: '#FFF',
    margin: 5,
  },
});
