import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {readTag} from './NFCReader';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import nfcManager from 'react-native-nfc-manager';
import AdditionalAuthModal from './AdditionalAuthModal';
import {cleanUp} from './NFCReader';
const AuthScreen = props => {
  const navigation = props.navigation;
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeAuthMethod, setActiveAuthMethod] = useState('camera');
  const [additionalAuthModalVisible, setAdditionalAuthModalVisible] =
    useState(true);
  const onBarcodeReadHandler = e => {
    setPhoneNumber(e.data);
    setIsLoading(true);
    setTimeout(() => {
      setIsSuccess(true);
      setIsLoading(false);
      setTimeout(() => {
        navigation.replace('Menu');
      }, 500);
    }, 1000);
  };

  useEffect(() => {
    nfcManager
      .start()
      .then(() => readTag())
      .then(phoneNumber => onBarcodeReadHandler({data: phoneNumber}))
      .catch(e => console.log('Error on NFC: ', e));
    return cleanUp;
  });

  const toggleCamera = () => {
    console.log('halo');
    setActiveAuthMethod('camera');
  };

  const toggleNFC = () => {
    setActiveAuthMethod('nfc');
  };
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <ScrollView style={styles.scrollView}>
      <AdditionalAuthModal
        visible={additionalAuthModalVisible}
        onRequestClose={() => setAdditionalAuthModalVisible(false)}
      />
      <View style={styles.body}>
        <View style={styles.heading}>
          <Text style={{...styles.text, ...styles.headlineText}}>Cyber</Text>
          <Button
            color="black"
            title="Dalej"
            style={styles.nextButton}
            onPress={() => onBarcodeReadHandler({data: phoneNumber})}
          />
        </View>
        <View style={styles.cameraPreviewWrapper}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: '10%',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={toggleCamera}
              style={{
                ...styles.authMethodIcon,
                backgroundColor:
                  activeAuthMethod === 'camera'
                    ? '#fff'
                    : styles.authMethodIcon.backgroundColor,
              }}>
              <Entypo
                name="camera"
                size={20}
                color={activeAuthMethod === 'camera' ? '#000' : '#eee'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.authMethodIcon,
                backgroundColor:
                  activeAuthMethod === 'nfc'
                    ? '#fff'
                    : styles.authMethodIcon.backgroundColor,
              }}
              onPress={toggleNFC}>
              <MaterialCommunityIcons
                name="nfc"
                size={20}
                color={activeAuthMethod === 'nfc' ? '#000' : '#eee'}
              />
            </TouchableOpacity>
          </View>
          {activeAuthMethod === 'camera' ? (
            <RNCamera
              style={styles.cameraPreview}
              onBarCodeRead={onBarcodeReadHandler}
              captureAudio={false}
            />
          ) : (
            <View style={styles.nfcHelpScreen}>
              <MaterialCommunityIcons
                name="cellphone-nfc"
                size={90}
                color="black"
              />
              <Text style={{color: 'black', marginTop: 30}}>
                Zeskanuj znacznik NFC z numerem telefonu
              </Text>
            </View>
          )}
        </View>
        <Text style={{...styles.text, ...styles.helpText}}>
          Zeskanuj kod QR, znacznik NFC lub wpisz numer telefonu
        </Text>
        <View
          style={{
            ...styles.phoneNumberSection,
            backgroundColor: isSuccess
              ? '#e7ffe6'
              : styles.phoneNumberSection.backgroundColor,
          }}>
          <TextInput
            keyboardType="phone-pad"
            style={{...styles.phoneNumberInput, ...styles.text}}
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
          {isSuccess ? (
            <Icon name="check" size={50} color="#000" />
          ) : isLoading ? (
            <ActivityIndicator size="large" color="#000" />
          ) : (
            <></>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
    height: '100%',
  },
  body: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    color: 'black',
  },
  headlineText: {
    fontSize: 30,
  },
  cameraPreviewWrapper: {
    marginTop: '5%',
    aspectRatio: 1,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'black',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  cameraPreview: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },

  phoneNumberInput: {
    width: '80%',
    fontSize: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  heading: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  nextButton: {},

  helpText: {
    marginTop: '10%',
    textAlign: 'center',
  },

  phoneNumberSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 5,
    marginTop: '5%',
  },
  authMethodIcon: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ccc',
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  nfcHelpScreen: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthScreen;
