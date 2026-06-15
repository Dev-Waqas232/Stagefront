import { StyleSheet } from 'react-native';

import { colors } from './colors';

export const styles = StyleSheet.create({
  input: {
    borderColor: colors.textMuted,
    color: 'black',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingStart: 20,
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
