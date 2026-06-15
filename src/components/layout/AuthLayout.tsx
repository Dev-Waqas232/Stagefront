import React, { ReactNode, useEffect, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '../../theme/colors';

interface AuthLayoutProps {
  headingText: string;
  descriptionText: string;
  children: ReactNode;
}

export default function AuthLayout({
  headingText,
  descriptionText,
  children,
}: AuthLayoutProps) {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.15,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [scale]);

  return (
    <SafeAreaView style={styles.layoutContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Animated.View style={[styles.circleTop, { transform: [{ scale }] }]} />
        <Animated.View
          style={[styles.circleBottom, { transform: [{ scale }] }]}
        />
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.contentContainer}
        >
          <View>
            <Text style={styles.heading}>{headingText}</Text>
            <Text style={styles.description}>{descriptionText}</Text>
          </View>

          <View style={styles.formContainer}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.textDark,
  },
  description: {
    fontStyle: 'italic',
    marginTop: -3,
    color: colors.textMuted,
  },
  formContainer: {
    marginTop: 20,
    gap: 15,
  },
  circleTop: {
    position: 'absolute',
    top: -80,
    right: -60,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FFD8D0',
  },
  circleBottom: {
    position: 'absolute',
    bottom: -100,
    left: -70,
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#FFE9C2',
  },
});
