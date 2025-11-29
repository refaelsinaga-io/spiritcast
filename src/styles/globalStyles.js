import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  headerTab: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    textAlign: 'center',
    backgroundColor: '#ffffffff',
  },
  headerTabText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000ff',
  },
});

// Export individual styles if needed
export const colors = {
  primary: '#FF0050',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#666666',
  lightGray: '#F8F8F8',
  green: '#4CAF50',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
};

export const typography = {
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 15,
  },
  caption: {
    fontSize: 13,
  },
};
