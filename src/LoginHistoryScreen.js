import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
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
  },
});

const LoginHistoryScreen = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        paddingVertical: 20,
        paddingHorizontal: 20,
        height: '100%',
      }}>
      <Text style={{fontSize: 30, color: 'black'}}>Historia logowań</Text>
      {[
        ['2022/01/11', 'Warszawa, MZ', 'Udane'],
        ['2022/01/10', 'Warszawa, MZ', 'Udane'],
        ['2022/01/10', 'Olsztyn, WM', 'Nieudane'],
        ['2022/01/09', 'Warszawa, MZ', 'Udane'],
        ['2022/01/08', 'Warszawa, MZ', 'Udane'],
      ].map(elem => (
        <View style={{...styles.listItem, marginTop: 20}}>
          <View>
            <Text style={styles.text}>{elem[0]}</Text>
            <Text style={{...styles.text, color: '#555'}}>{elem[1]}</Text>
          </View>
          <View style={styles.flexWrapper}>
            <Text style={styles.text}>{elem[2]}</Text>
            {
              <Feather
                name={elem[2] === 'Udane' ? 'check' : 'x-circle'}
                size={25}
                color={elem[2] === 'Udane' ? '#009c31' : '#b30009'}
                style={{marginLeft: 10}}
              />
            }
          </View>
        </View>
      ))}
    </View>
  );
};

export default LoginHistoryScreen;
