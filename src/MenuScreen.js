import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Octicon from 'react-native-vector-icons/Octicons';
import IconButton from './IconButton';
const MenuScreen = props => {
  const navigation = props.navigation;
  return (
    <View style={styles.menuButtonList}>
      <IconButton
        onPress={() => navigation.navigate('Auth')}
        buttonStyle={{backgroundColor: '#00377a'}}
        textStyle={{color: 'white'}}
        iconStyle={{color: 'white'}}
        IconComponent={IonIcon}
        iconName="key"
        text="Uwierzytelnianie"
      />
      <IconButton
        onPress={() => {
          navigation.navigate('Settings');
        }}
        IconComponent={Octicon}
        iconName="settings"
        text="Ustawienia"
      />

      <IconButton
        onPress={() => navigation.navigate('History')}
        IconComponent={IonIcon}
        iconName="time-outline"
        text="Historia logowań"
      />
      <IconButton
        onPress={() => navigation.navigate('SelfService')}
        IconComponent={IonIcon}
        iconName="person"
        text="Self-service"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  menuButtonList: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuScreen;
