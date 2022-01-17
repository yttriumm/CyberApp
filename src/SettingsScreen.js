import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 5,
    padding: 10,
    justifyContent: 'space-between',
  },
  flexWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#000',
    fontSize: 15,
    marginLeft: 10,
  },
});

const SettingsScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 20,
        height: '100%',
      }}>
      <Text style={{fontSize: 30, color: '#000'}}>Ustawienia</Text>
      <View style={{...styles.listItem, marginTop: 20}}>
        <View style={styles.flexWrapper}>
          <Entypo name="phone" size={20} color="#000" />
          <Text style={styles.text}>Numer telefonu </Text>
        </View>
        <View style={styles.flexWrapper}>
          <Text style={{...styles.text, color: '#555'}}>732004618</Text>
          <Feather
            name="trash"
            size={17}
            style={{marginLeft: 10}}
            color="#75000a"
          />
        </View>
      </View>
      <View style={styles.listItem}>
        <View style={styles.flexWrapper}>
          <Ionicons name="notifications" size={20} color="#000" />
          <Text style={styles.text}>Powiadomienia push</Text>
        </View>
        <Switch value={true} thumbColor={'#000'} trackColor={'#000'} />
      </View>
    </View>
  );
};

export default SettingsScreen;
