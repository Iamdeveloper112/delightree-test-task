import React from 'react';
import { View, ViewProps } from 'react-native';
import { styles } from './style';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  style?: any;
}

const Card: React.FC<CardProps> = ({ children, style, ...rest }) => (
  <View style={[styles.card, style]} {...rest}>
    {children}
  </View>
);

export default Card; 