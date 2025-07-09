import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { styles } from './style';

const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <RNTextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor={props.placeholderTextColor || '#888'}
    />
  );
};

export default TextInput; 