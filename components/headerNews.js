/*
Mr Tran Hong Khanh
Email: khanhcd97@gmail.com
header cho màn hình trang chủ
*/
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
const window = Dimensions.get('window');
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Badge, Icon} from 'react-native-elements';
export default class HeaderNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: '10',
    };
  }

  render() {
    return (
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          backgroundColor: '#F48FB1',
        }}>
        <View style={styles.container}>
          <View style={styles.titleHeader}>
            <Image
              source={require('../images/logo.png')}
              style={styles.logoimage}
            />
            <Text style={styles.textTitleHeader}>Tin tức, sự kiện</Text>
          </View>
          <View style={styles.searchBar}>
            <View style={styles.SectionStyle}>
              <MaterialIcons name="search" size={20} color="#AA9797" />

              <TextInput
                style={{flex: 1, height: 35}}
                underlineColorAndroid="white"
              />
            </View>
            {/* <MaterialIcons name="notifications" size={30} color="white" /> */}
            <TouchableOpacity
              style={{}}
              onPress={() => {
                this.props.navigation.navigate('NotificationComponent');
              }}>
              <Icon
                type="ionicon"
                name="ios-notifications"
                size={30}
                color="white"
              />
            </TouchableOpacity>
            {this.state.notification != '0' ? (
              <Badge
                value={this.state.notification}
                status="error"
                containerStyle={{position: 'absolute', top: -3, right: 3}}
              />
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#F48FB1',
    height: 58,
    width: window.width,
  },
  titleHeader: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
  },
  textTitleHeader: {
    fontSize: 20,
    color: '#FFF',
    margin: 5,
    textAlign: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: 'white',
    borderRadius: 25,
    marginRight: 5,
    height: 25,
    width: 150,
  },
  logoimage: {
    width: 50,
    height: 50,
    //borderRadius: 50,
  },
});
