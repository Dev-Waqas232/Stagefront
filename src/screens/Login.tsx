import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from '@react-navigation/native';

import { colors } from '../theme/colors';
import { styles as authStyles } from '../theme/authStyle';
import AuthLayout from '../components/layout/AuthLayout';
import AuthButton from '../components/ui/AuthButton';

export default function Login() {
  return (
    <AuthLayout
      headingText="Login Now!"
      descriptionText="Log in to manage your events"
    >
      <TextInput
        style={authStyles.input}
        placeholder="email@example.com"
        placeholderTextColor={colors.textMuted}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={authStyles.input}
        placeholder="••••••••"
        placeholderTextColor={colors.textMuted}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <Link
        screen="ForgotPassword"
        style={[styles.fgPasswordLink, authStyles.link]}
      >
        Forgot Password?
      </Link>
      <AuthButton btnText="Login" />
      <View style={authStyles.bottomLinkContainer}>
        <Text style={authStyles.linkText}>Don't have an account? </Text>
        <Link screen="Register" style={[authStyles.linkText, authStyles.link]}>
          Register Now!
        </Link>
      </View>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  fgPasswordLink: {
    marginTop: -12,
    fontSize: 13,
    alignSelf: 'flex-end',
  },
});
