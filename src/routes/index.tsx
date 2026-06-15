import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import VerifyOTP from '../screens/VerifyOTP';
import ResetPassword from '../screens/ResetPassword';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StaticParamList<typeof AuthStack> {}
  }
}

const AuthStack = createNativeStackNavigator({
  screens: {
    Login: Login,
    Register: Register,
    ForgotPassword: ForgotPassword,
    VerifyOTP: VerifyOTP,
    ResetPassword: ResetPassword,
  },
  screenOptions: {
    headerShown: false,
  },
});

const Navigation = createStaticNavigation(AuthStack);

export default function AppNavigation() {
  return <Navigation />;
}
