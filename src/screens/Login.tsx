import { useEffect, useRef } from 'react';
import {
  Animated,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

export default function Login() {
  const opacity = useRef(new Animated.Value(1)).current;

  const fadeTo = (value: number) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

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
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.circleTop, { transform: [{ scale }] }]} />
      <Animated.View
        style={[styles.circleBottom, { transform: [{ scale }] }]}
      />
      <View>
        <Text style={styles.heading}>Login Now!</Text>
        <Text style={styles.description}>Log in to manage your events</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="email@example.com"
          placeholderTextColor={colors.textMuted}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor={colors.textMuted}
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <Text style={{ ...styles.fgPasswordLink, ...styles.link }}>
          Forgot Password?
        </Text>
        <Pressable onPressIn={() => fadeTo(0.7)} onPressOut={() => fadeTo(1)}>
          <Animated.View style={[styles.button, { opacity }]}>
            <Text style={styles.btnText}>Login</Text>
          </Animated.View>
        </Pressable>
        <View style={styles.bottomLinkContainer}>
          <Text style={styles.linkText}>Don't have an account? </Text>
          <Text style={{ ...styles.linkText, ...styles.link }}>
            Register Now!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
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
  input: {
    borderColor: colors.textMuted,
    color: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingStart: 20,
  },
  fgPasswordLink: {
    marginTop: -12,
    fontSize: 13,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: colors.primaryDark,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnText: {
    color: colors.white,
    textAlign: 'center',
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
  bottomLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    color: colors.textDark,
    fontSize: 13,
  },
  link: {
    color: colors.primary,
    fontStyle: 'italic',
  },
});
