import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const MyWebView = (props): React.ReactElement => {
  return (
    <WebView 
      style={styles.container}
      source={{ uri: 'https://www.google.com/' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});