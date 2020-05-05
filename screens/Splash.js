/*
Mr Tran Hong Khanh
Email: khanhcd97@gmail.com
Splash screen
*/
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
const window = Dimensions.get('window');
export default class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      console.log('Done some tasks for about 3 seconds');
      this.setState({currentScreen: 'Login'});
      this.props.navigation.navigate('Login');
    }, 1500);
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../images/background.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.container2}>
          <View style={styles.background}></View>
          <View style={styles.footer}>
            <View style={{flex: 1}}>
              <Text style={[styles.text, {fontSize: 26, marginTop: 5}]}>
                HIỂU CON
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[styles.text, {fontSize: 18}]}>
                đồng hành cùng cha mẹ
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    //resizeMode: 'cover',
    width: window.width,
    height: window.height,
  },

  container2: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  background: {
    flex: 9,
  },
  footer: {
    flex: 1,
    backgroundColor: '#F48FB1',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
    fontFamily: 'Ruluko',
  },
});
