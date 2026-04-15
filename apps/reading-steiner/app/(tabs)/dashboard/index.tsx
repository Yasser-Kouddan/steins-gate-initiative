import { View, Text } from 'react-native';

export default function Dashboard() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
      <Text style={{ color: '#ff6a00', fontSize: 28, fontWeight: '700' }}>Dashboard</Text>
      <Text style={{ color: '#888', marginTop: 8 }}>Real-time telemetry & widgets go here.</Text>
    </View>
  );
}
