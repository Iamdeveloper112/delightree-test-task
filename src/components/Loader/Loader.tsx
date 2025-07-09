import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { styles } from './style';

interface LoaderProps {
  text?: string;
}

const Loader: React.FC<LoaderProps> = ({ text }) => (
  <View style={styles.centered}>
    <ActivityIndicator size="large" color="#007bff" />
    {text && <Text style={styles.text}>{text}</Text>}
  </View>
);

export default Loader; 