import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from './src/theme/colors';
import AppNavigation from './src/routes';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
