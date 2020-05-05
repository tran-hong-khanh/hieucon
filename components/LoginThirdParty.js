import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
/*
*
Define props
backgroundColor
backgroundColorIcon
nameIcon
colorIcon
sizeIcon
Text
onPress
*/

const LoginThirdParty = ({
  backgroundColor,
  backgroundColorIcon,
  nameIcon,
  colorIcon,
  sizeIcon,
  text,
  onPress,
  ...props
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <View
        style={{
          margin: 4,
          width: 20,
          height: 20,
          backgroundColor: backgroundColorIcon,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome name={nameIcon} color={colorIcon} size={sizeIcon} />
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Montserrat-Bold',
            fontSize: 12,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
export default LoginThirdParty;
