import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ label, onPress, type = 'filled', size = 'medium' }) => {
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
        onPress();  // onPress 이벤트 트리거
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
    backgroundColor: '#333', // 기본 채워진 버튼 배경색
  },
  filledPressed: {
    backgroundColor: '#555', // 눌렸을 때 채워진 버튼 배경색
  },
  outline: {
    borderWidth: 1,
    borderColor: '#333', // 기본 테두리 색
    backgroundColor: '#fff', // 기본 테두리 버튼 배경색
  },
  outlinePressed: {
    borderWidth: 1,
    borderColor: '#555', // 눌렸을 때 테두리 색
    backgroundColor: '#f5f5f5', // 눌렸을 때 테두리 버튼 배경색
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  large: {
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  filledText: {
    color: '#fff', // 기본 채워진 버튼 텍스트 색
  },
  filledTextPressed: {
    color: '#eee', // 눌렸을 때 채워진 버튼 텍스트 색
  },
  outlineText: {
    color: '#333', // 기본 테두리 버튼 텍스트 색
  },
  outlineTextPressed: {
    color: '#555', // 눌렸을 때 테두리 버튼 텍스트 색
  },
  mediumText: {
    fontSize: 14,
  },
  largeText: {
    fontSize: 16,
  },
});

export default CustomButton;
