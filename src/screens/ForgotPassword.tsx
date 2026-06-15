import React from 'react';
import { TextInput, View } from 'react-native';
import { Link, useNavigation } from '@react-navigation/native';

import { colors } from '../theme/colors';
import AuthLayout from '../components/layout/AuthLayout';
import AuthButton from '../components/ui/AuthButton';
import { styles as authStyles } from '../theme/authStyle';

export default function ForgotPassword() {
  const navigation = useNavigation();

  return (
    <AuthLayout
      headingText="Forgot Password"
      descriptionText={`Enter your email and we'll send you a code to reset your password`}
    >
      <TextInput
        style={authStyles.input}
        placeholder="email@example.com"
        placeholderTextColor={colors.textMuted}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <AuthButton
        onPress={() => navigation.navigate('VerifyOTP')}
        btnText="Send Code"
      />
      <View style={authStyles.bottomLinkContainer}>
        <Link screen="Login" style={[authStyles.linkText, authStyles.link]}>
          Back to Login!
        </Link>
      </View>
    </AuthLayout>
  );
}
