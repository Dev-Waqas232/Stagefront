import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputKeyPressEvent,
  View,
} from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';

import { colors } from '../theme/colors';
import AuthLayout from '../components/layout/AuthLayout';
import AuthButton from '../components/ui/AuthButton';
import { styles as authStyles } from '../theme/authStyle';

export default function VerifyOTP() {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  const navigation = useNavigation();

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: TextInputKeyPressEvent, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <AuthLayout
      headingText="Verify Your Email"
      descriptionText={`We've sent a 6-digit code to [placeholder_email]`}
    >
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            key={index}
            ref={ref => {
              inputRefs.current[index] = ref;
            }}
            style={[
              styles.otpBox,
              focusedIndex === index && styles.otpBoxActive,
            ]}
            value={digit}
            onChangeText={text => handleChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>
      <AuthButton
        btnText="Verify Code"
        onPress={() => navigation.navigate('ResetPassword')}
      />
      <View style={authStyles.bottomLinkContainer}>
        <Link screen="Login" style={[authStyles.linkText, authStyles.link]}>
          Resend in 30 seconds
        </Link>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  otpBox: {
    width: 45,
    height: 50,
    borderWidth: 1,
    borderColor: colors.textMuted,
    borderRadius: 10,
    fontSize: 20,
    color: colors.textDark,
  },
  otpBoxActive: {
    borderColor: colors.primary,
    borderWidth: 1.5,
  },
});
