import 'react-native-gesture-handler';
import 'react-native-reanimated';
// Initialize performance improvements for navigation
import { enableScreens } from 'react-native-screens';
enableScreens();

// NOTE: Place side-effect initializers (Sentry, FCM, notifications) in
// `src/init/*` and import them here before the router entry if needed.

// Expo Router entry (must be last)
import 'expo-router/entry';
