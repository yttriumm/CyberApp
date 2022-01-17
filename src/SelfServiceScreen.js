import React, {useState, useEffect} from 'react';
import {Platform, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import LoadingScreen from './LoadingScreen';
const checkInternetConnection = async () => {
  const netState = await NetInfo.fetch();
  return netState.isInternetReachable;
};

const SelfServiceScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const refresh = () => {
    setIsLoading(true);
    setIsError(false);
    checkInternetConnection().then(isConnection => {
      if (isConnection) {
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsError(true);
      }
    });
  };

  useEffect(() => refresh(), []);

  if (isLoading) {
    return (
      <LoadingScreen
        error={isError}
        errorTitle="Brak połączenia z siecią"
        errorDescription="Sprawdź swoje połączenie internetowe i spróbuj ponownie."
        refreshHandler={refresh}
      />
    );
  }
  return <WebView source={{uri: 'https://demo.phoneid.co/'}} />;
};

export default SelfServiceScreen;
