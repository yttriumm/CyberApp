import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import IconButton from './IconButton';
const LoadingScreen = props => {
  const {error, errorTitle, errorDescription, refreshHandler} = props;
  if (error) {
    return (
      <View style={styles.body}>
        <IonIcon name="wifi" style={{...styles.errorTitle, fontSize: 100}} />
        <Text style={styles.errorTitle}>{errorTitle}</Text>
        <Text style={{...styles.errorTitle, fontSize: 15}}>
          {errorDescription}
        </Text>
        <IconButton
          iconName="refresh"
          IconComponent={IonIcon}
          text="Odśwież"
          buttonStyle={{width: 150, justifyContent: 'center'}}
          onPress={refreshHandler}
        />
      </View>
    );
  }
  return (
    <View style={styles.body}>
      <ActivityIndicator color="#000" size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30,
  },
  errorTitle: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
  },
});

export default LoadingScreen;
