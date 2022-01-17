import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const IconButton = props => {
  const {
    iconName,
    IconComponent,
    text,
    onPress,
    buttonStyle,
    textStyle,
    iconStyle,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        buttonStyle
          ? {
              ...styles.menuButton,
              ...buttonStyle,
            }
          : styles.menuButton
      }>
      <IconComponent
        name={iconName}
        style={
          iconStyle
            ? {
                ...styles.menuButtonIcon,
                ...iconStyle,
              }
            : styles.menuButtonIcon
        }
      />
      <Text style={{...styles.menuButtonText, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    marginTop: 20,
    flexDirection: 'row',
    width: 200,
    height: 55,
    padding: 15,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: 'white',
    borderColor: 'black',
    alignItems: 'baseline',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    shadowColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  menuButtonText: {
    fontSize: 15,
    color: 'black',
    paddingLeft: 10,
  },
  menuButtonIcon: {
    color: 'black',
    fontSize: 20,
  },
});

export default IconButton;
