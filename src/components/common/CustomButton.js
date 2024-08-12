import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({label, onPress, type = 'filled', size = 'medium'}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        type === 'filled' ? (isPressed ? styles.filledPressed : styles.filled) : (isPressed ? styles.outlinePressed : styles.outline),
        size === 'large' ? styles.large : styles.medium,
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => {
        setIsPressed(false);
        onPress();
      }}
    >
      <Text
        style={[
          styles.buttonText,
          type === 'filled' ? (isPressed ? styles.filledTextPressed : styles.filledText) : (isPressed ? styles.outlineTextPressed : styles.outlineText),
          size === 'large' ? styles.largeText : styles.mediumText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  filled: {
    backgroundColor: '#333',
  },
  filledPressed: {
    backgroundColor: '#555',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#fff',
  },
  outlinePressed: {
    borderWidth: 1,
    borderColor: '#555',
    backgroundColor: '#f5f5f5',
  },
  medium: {
    paddingVertical: 8, // medium 스타일에 대한 적절한 padding 설정
    paddingHorizontal: 16,
  },
  large: {
    paddingVertical: 12, // large 스타일에 대한 적절한 padding 설정
    paddingHorizontal: 24,
  },
  buttonText: {
    fontWeight: 'light',
  },
  filledText: {
    color: '#fff',
  },
  filledTextPressed: {
    color: '#eee',
  },
  outlineText: {
    color: '#333',
  },
  outlineTextPressed: {
    color: '#555',
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
});

export default CustomButton;
