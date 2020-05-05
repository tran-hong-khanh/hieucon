/*
Mr Tran Hong Khanh
Email: khanhcd97@gmail.com
*/

import React, {Component} from 'react';
import Login from './screens/Login';
import Splash from './screens/Splash';
import Tools from './screens/tools';
import EASY from './screens/EASY';
import Infor from './screens/infor';
import NotificationComponent from './screens/Notifi';
import FavoriteNews from './screens/favoriteNews';
import OtherNews from './screens/otherNews';
import ChooseCategory from './screens/chooseCategory';
import HeaderNews from './components/headerNews';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Platform, Dimensions} from 'react-native';

const window = Dimensions.get('window');
const BottomTabNavigator = createBottomTabNavigator();
const TopTabNavigator = createMaterialTopTabNavigator();

const Stack = createStackNavigator();
const StackAll = createStackNavigator();
const StackHeader = createStackNavigator();

/*..................TopTab cho màn hình Home..................*/

function TopTab() {
  return (
    <TopTabNavigator.Navigator
      tabBarOptions={{
        labelStyle: {fontSize: 12, fontWeight: 'bold'},
        tabStyle: {width: window.width / 3},
        activeTintColor: '#F2994A',
        inactiveTintColor: '#848484',
        style: {marginTop: Platform.OS === 'ios' ? 3 : 3},
      }}>
      <TopTabNavigator.Screen name="Ưa thích" component={FavoriteNews} />
      <TopTabNavigator.Screen name="Chọn danh mục" component={ChooseCategory} />
      <TopTabNavigator.Screen name="Tin tức khác" component={OtherNews} />
    </TopTabNavigator.Navigator>
  );
}

/*..................customize cho header màn hình Home..................*/

function TopTabHeader() {
  return (
    <Stack.Navigator
      initialRouteName={'TopTab'}
      screenOptions={{
        headerStyle: {backgroundColor: '#F48FB1'},
      }}>
      <Stack.Screen
        name="TopTab"
        component={TopTab}
        options={{header: (props) => <HeaderNews {...props} />}}
      />
    </Stack.Navigator>
  );
}

/*..................chuyển màn hình giữa topTab và thông báo..................*/

function TopNavigator() {
  return (
    <StackHeader.Navigator initialRouteName={'TopTabHeader'} headerMode="none">
      <StackHeader.Screen name="TopTabheader" component={TopTabHeader} />
      <StackHeader.Screen
        name="NotificationComponent"
        component={NotificationComponent}
      />
    </StackHeader.Navigator>
  );
}

/*..................BottomTab..................*/

function BottomTab() {
  return (
    <BottomTabNavigator.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <BottomTabNavigator.Screen
        name="home"
        component={TopNavigator}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Tools"
        component={Tools}
        options={{
          tabBarLabel: 'Công cụ',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="apps" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="EASY"
        component={EASY}
        options={{
          tabBarLabel: 'E.A.S.Y',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="recycle" color={color} size={size} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Infor"
        component={Infor}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}

/*..................chuyển màn hình giữa splash, login và BottomTab..................*/

export default function App() {
  return (
    <NavigationContainer>
      <StackAll.Navigator initialRouteName={'Splash'} headerMode="none">
        <StackAll.Screen
          name="Splash"
          component={Splash}
          options={{
            gestureEnabled: false, // không cho điều hướng ngược lại
          }}
        />
        <StackAll.Screen
          name="Login"
          component={Login}
          options={{
            gestureEnabled: false,
          }}
        />
        <StackAll.Screen
          name="BottomTab"
          component={BottomTab}
          options={{
            gestureEnabled: false,
          }}
        />
      </StackAll.Navigator>
    </NavigationContainer>
  );
}
