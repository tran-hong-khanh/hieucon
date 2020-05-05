import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const window = Dimensions.get('window');
export default class FlatListItem extends Component {
  render() {
    return (
      <View style={styles.flatlistContent}>
        <View>
          <Text style={styles.textTitle} numberOfLines={1} ellipsizeMode="tail">
            {this.props.item.title}
          </Text>
          <Image
            source={{uri: this.props.item.image}}
            style={styles.flastlistImage}
          />
          <Text style={styles.content} numberOfLines={3} ellipsizeMode="tail">
            {this.props.item.content}
          </Text>
        </View>
        <View style={styles.footer}>
          <MaterialIcons name="access-time" color="#BABABA" size={15} />
          <Text style={styles.textTime}>{this.props.item.time}</Text>
          <View style={styles.categories} />
          <Text style={styles.textCategories}>CATEGORIES</Text>
        </View>
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 25,
    margin: 15,
    color: '#585858',
    fontWeight: 'bold',
  },
  content: {
    fontSize: 17,
    margin: 10,
    color: '#535353',
  },
  textTime: {
    fontSize: 14,
    margin: 10,
    color: '#BABABA',
    fontWeight: 'bold',
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
  categories: {
    width: 1,
    height: 25,
    backgroundColor: '#BABABA',
  },
  textCategories: {
    fontSize: 14,
    margin: 10,
    color: '#BABABA',
    fontWeight: 'bold',
  },
});
