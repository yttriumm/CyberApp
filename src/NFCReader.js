import {useEffect} from 'react';
import NfcManager, {NfcEvents, Ndef} from 'react-native-nfc-manager';
import React from 'react';
async function initNfc() {
  await NfcManager.start();
}
export const cleanUp = () => {
  NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
  NfcManager.setEventListener(NfcEvents.SessionClosed, null);
};

function readNdef() {
  return new Promise(resolve => {
    let tagFound = null;

    NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
      tagFound = tag;
      resolve(tagFound);
      NfcManager.unregisterTagEvent().catch(() => 0);
    });

    NfcManager.setEventListener(NfcEvents.SessionClosed, () => {
      cleanUp();
      if (!tagFound) {
        resolve();
      }
    });

    NfcManager.registerTagEvent();
  });
}

export const readTag = async () => {
  const tag = await readNdef();
  if (tag && tag?.ndefMessage) {
    const payload = tag.ndefMessage[0].payload;
    const decoded = Ndef.uri.decodePayload(payload);
    if (decoded.startsWith('tel:')) {
      phoneNumber = decoded.split(':')[1];
      console.log(phoneNumber);
      return phoneNumber;
    }
  }
};
