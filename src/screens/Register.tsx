import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Link } from '@react-navigation/native';

import { colors } from '../theme/colors';
import AuthLayout from '../components/layout/AuthLayout';
import AuthButton from '../components/ui/AuthButton';
import { styles as authStyles } from '../theme/authStyle';

export default function Register() {
  return (
    <AuthLayout
      headingText="Create Your Organization Account"
      descriptionText="Set up your account to start hosting events"
    >
      <TextInput
        style={authStyles.input}
        placeholder="Organization Name"
        placeholderTextColor={colors.textMuted}
      />
      <TextInput
        style={authStyles.input}
        placeholder="email@example.com"
        placeholderTextColor={colors.textMuted}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={authStyles.input}
        placeholder="Enter Password"
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
      <AuthButton btnText="Register" />
      <View style={authStyles.bottomLinkContainer}>
        <Text style={authStyles.linkText}>Already have an account? </Text>
        <Link screen="Login" style={[authStyles.linkText, authStyles.link]}>
          Login Now!
        </Link>
      </View>
    </AuthLayout>
  );
}
