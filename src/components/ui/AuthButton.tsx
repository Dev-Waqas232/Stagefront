import React, { useRef } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../theme/colors';

interface AuthButtonProps {
  onPress?: () => void;
  btnText: string;
}

export default function AuthButton({ onPress, btnText }: AuthButtonProps) {
  const opacity = useRef(new Animated.Value(1)).current;

  const fadeTo = (value: number) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={() => fadeTo(0.7)}
      onPressOut={() => fadeTo(1)}
      onPress={onPress}
    >
      <Animated.View style={[styles.button, { opacity }]}>
        <Text style={styles.btnText}>{btnText}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryDark,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnText: {
    color: colors.white,
    textAlign: 'center',
  },
});
