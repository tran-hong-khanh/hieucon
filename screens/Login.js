/*
Mr Tran Hong Khanh
Email: khanhcd97@gmail.com
màn hình login
*/

import React, {Component} from 'react';
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import LoginThirdParty from '../components/LoginThirdParty';

const window = Dimensions.get('window');
export default class Login extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        style={{
          flex: 1,
          backgroundColor: 'rgb(32,53,70)',
          flexDirection: 'column',
        }}
        onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            source={require('../images/background.jpg')}
            style={styles.backgroundImage}
          />
          <View style={styles.container2}>
            <View style={styles.logo}>
              <Image
                source={require('../images/logo.png')}
                style={styles.logoimage}
              />
            </View>
            {/* loginform */}
            <View style={styles.loginform}>
              <View style={styles.textinputview}>
                <TextInput
                  style={styles.textinput}
                  //onChangeText={text => this.setState({ email: text })}
                  placeholder="Email address"
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCorrect={false}
                />
              </View>
              <View style={styles.textinputview}>
                <TextInput
                  style={styles.textinput}
                  //onChangeText={text => this.setState({ pass: text })}
                  placeholder="Mật khẩu"
                  keyboardType="default"
                  returnKeyType="go"
                  secureTextEntry={true}
                  autoCorrect={false}
                  ref={'txtPassword'}
                />
              </View>
            </View>
            {/* end loginform */}
            <View style={styles.forgetpassword}>
              <TouchableOpacity
                onPress={() => {
                  console.log('quên mật khẩu');
                }}>
                <Text style={styles.textFogotPass}>Bạn quên mật khẩu?</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                console.log('login');
                this.props.navigation.navigate('BottomTab');
              }}
              style={styles.loginbutton}>
              <Text style={styles.textLogin}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <View style={styles.LoginThirdParty}>
              <LoginThirdParty
                backgroundColor="#3578E5"
                backgroundColorIcon="#2d518c"
                nameIcon="facebook"
                colorIcon="#FFF"
                sizeIcon={15}
                text="Login với Facebook"
                onPress={() => {
                  console.log('Login với Facebook');
                }}>
                >
              </LoginThirdParty>
              <LoginThirdParty
                backgroundColor="#FF6868"
                //backgroundColorIcon="#f0134a"
                nameIcon="google"
                colorIcon="#f7285b"
                sizeIcon={20}
                text="Login với Google"
                onPress={() => {
                  console.log('Login với Google');
                }}>
                >
              </LoginThirdParty>
            </View>
            <View style={styles.register}>
              <TouchableOpacity
                onPress={() => {
                  console.log('quên mật khẩu');
                }}
                //style={{ backgroundColor: '#f7c744', paddingVertical: 15 }}
              >
                <Text style={styles.textRegister}>
                  Chưa có tài khoản? ĐĂNG KÝ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
  logo: {
    top: window.height / 8,
    left: window.width / 2 - window.width / 6,
  },
  logoimage: {
    width: window.width / 2.8,
    height: window.height / 5.5,
  },

  container2: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  loginform: {
    width: (window.width / 4) * 3,
    height: window.height / 8,
    top: (window.height - window.height / 1.9) / 2,
    left: window.width / 8,
  },
  textFogotPass: {
    textAlign: 'right',
    color: '#F48FB1',
    fontSize: 18,
    fontWeight: 'bold',
    right: window.width / 8,
    fontFamily: 'Montserrat-Bold',
  },
  textinputview: {
    flex: 1,
  },
  textinput: {
    height: 40,
    backgroundColor: 'white',
    //color: 'black',
    paddingHorizontal: 10,
    marginBottom: 20,
    width: (window.width / 4) * 3,
    position: 'absolute',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  textLogin: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontFamily: 'Montserrat-Bold',
    //marginTop: 10,
  },
  forgetpassword: {
    height: 20,
    //width: 170
    top: (window.height - window.height / 1.85) / 2,
    //right: window.width / 8,
    left: null,
  },
  loginbutton: {
    backgroundColor: '#F48FB1',
    paddingVertical: 15,
    width: (window.width / 4) * 3,
    height: window.height / 16,
    top: (window.height - window.height / 2.4) / 2,
    left: window.width / 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginThirdParty: {
    width: (window.width / 4) * 3,
    height: window.height / 26,
    top: window.height / 3.2,
    left: window.width / 8,
    flexDirection: 'row',
  },
  register: {
    height: 20,
    //width: 170
    top: window.height / 2.1,
    //right: window.width / 8,
    left: null,
  },
  textRegister: {
    textAlign: 'right',
    fontFamily: 'Montserrat-Bold',
    color: '#F48FB1',
    fontSize: 18,
    fontWeight: 'bold',
    right: window.width / 8,
  },
});
