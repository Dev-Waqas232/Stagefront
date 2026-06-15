import React from 'react';
import { TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../theme/colors';
import AuthLayout from '../components/layout/AuthLayout';
import AuthButton from '../components/ui/AuthButton';
import { styles as authStyles } from '../theme/authStyle';

export default function ResetPassword() {
  const navigation = useNavigation();

  return (
    <AuthLayout
      headingText="Set New Password"
      descriptionText="Choose a strong password for your account"
    >
      <TextInput
        style={authStyles.input}
        placeholder="New Password"
        placeholderTextColor={colors.textMuted}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TextInput
        style={authStyles.input}
        placeholder="Confirm Password"
        placeholderTextColor={colors.textMuted}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <AuthButton
        btnText="Reset Password"
        onPress={() => navigation.navigate('Login')}
      />
    </AuthLayout>
  );
}
