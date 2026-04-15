import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export const unstable_settings = { initialRouteName: 'dashboard' };

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#ff6a00',
        tabBarStyle: { height: Platform.OS === 'web' ? 64 : 56 },
      }}
    >
      <Tabs.Screen name="dashboard" options={{ title: 'Dashboard' }} />
      <Tabs.Screen name="news" options={{ title: 'News' }} />
    </Tabs>
  );
}
