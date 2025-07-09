import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { POLICY_URL } from '../../constants/strings';
import { styles } from './style';

const PolicyViewerScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <WebView source={{ uri: POLICY_URL }} style={styles.webview} />
    </View>
  );
};

export default PolicyViewerScreen; 