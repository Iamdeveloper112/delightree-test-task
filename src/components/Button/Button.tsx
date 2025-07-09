import React from 'react';
import { TouchableOpacity, Text, View, GestureResponderEvent } from 'react-native';
import { styles } from './style';

interface ButtonProps {
  title?: string;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'checkbox' | 'rating';
  selected?: boolean;
  style?: any;
  children?: React.ReactNode;
  disabled?: boolean;
  textStyle?: any;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, variant = 'primary', selected, style, children, disabled , textStyle}) => {
  switch (variant) {
    case 'checkbox':
      return (
        <TouchableOpacity onPress={onPress} style={[styles.checkboxRow, style]} disabled={disabled}>
          <View style={[styles.checkbox, selected && styles.checkboxChecked, disabled && styles.disabledCheckbox]} />
          <Text style={[styles.checkboxLabel, disabled && styles.disabledText]}>{title}</Text>
        </TouchableOpacity>
      );
    case 'rating':
      return (
        <TouchableOpacity onPress={onPress} style={[styles.ratingCircle, selected && styles.ratingSelected, style, disabled && styles.disabledRating]} disabled={disabled}>
          <Text style={[styles.ratingText, selected && styles.ratingTextSelected, disabled && styles.disabledText]}>{title}</Text>
        </TouchableOpacity>
      );
    case 'primary':
    default:
      return (
        <TouchableOpacity onPress={onPress} style={[styles.primaryButton, style, disabled && styles.disabledButton]} disabled={disabled}>
          <Text style={[styles.primaryText, disabled && styles.disabledText , textStyle]}>{title || children}</Text>
        </TouchableOpacity>
      );
  }
};



export default Button;
