import React from 'react';
import {Modal, View, StyleSheet, Text, Button, Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  modalWrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000CC',
    padding: 20,
  },
  modalBody: {
    backgroundColor: '#fff',
    padding: 20,
    flexDirection: 'column',
    flexWrap: 'nowrap',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  text: {
    fontSize: 20,
    color: '#000',
  },
  icon: {
    color: '#000',
    width: '15%',
  },
});

const AdditionalAuthModal = ({visible, onRequestClose}) => {
  return (
    <Modal animationType="slide" visible={visible} transparent={true}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalBody}>
          <Text style={{fontSize: 17, color: '#000'}}>
            Wymagane dodatkowe uwierzytelnienie
          </Text>
          <View style={styles.listItem}>
            <MaterialCommunityIcons
              name="fingerprint"
              size={25}
              style={styles.icon}
            />
            <Text style={styles.text}>Biometria</Text>
          </View>
          <View style={styles.listItem}>
            <MaterialCommunityIcons
              name="numeric"
              size={25}
              style={styles.icon}
            />
            <Text style={styles.text}>PIN</Text>
          </View>
          <View style={styles.listItem}>
            <MaterialCommunityIcons
              name="form-textbox-password"
              size={25}
              style={styles.icon}
            />
            <Text style={styles.text}>Hasło</Text>
          </View>
          <View style={{...styles.listItem, borderBottomWidth: 0}}>
            <MaterialCommunityIcons
              name="account-voice"
              size={25}
              style={styles.icon}
            />
            <Text style={styles.text}>Biometria głosowa</Text>
          </View>
          <Pressable onPress={onRequestClose}>
            <Text
              style={{
                color: '#000',
                fontSize: 17,
                alignSelf: 'flex-end',
                paddingVertical: 10,
                paddingHorizontal: 20,
              }}>
              Anuluj
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

export default AdditionalAuthModal;
