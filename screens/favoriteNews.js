/*
Mr Tran Hong Khanh
Email: khanhcd97@gmail.com
màn hình hiển thị thông tin ưa thích
*/
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import magazine from '../data/magazine.json';
import FlatListItem from '../components/FlatlistItem';
const window = Dimensions.get('window');

export default class FavoriteNews extends Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={magazine}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={() => {}} style={styles.button}>
                <FlatListItem item={item} index={index} parenFlatList={this} />
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
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
  footer: {
    width: window.width - 30,
    height: 40,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  line: {
    width: window.width - 30,
    height: 1,
    backgroundColor: '#A7A7A7',
    marginTop: 5,
  },
  flatlistContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  flastlistImage: {
    width: window.width - 30,
    height: window.width / 2,
    marginLeft: 15,
    marginRight: 15,
  },
});
