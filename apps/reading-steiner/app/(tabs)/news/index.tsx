import { View, Text } from 'react-native';

export default function News() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
      <Text style={{ color: '#ff6a00', fontSize: 28, fontWeight: '700' }}>News</Text>
      <Text style={{ color: '#888', marginTop: 8 }}>CERN feeds and headlines will appear here.</Text>
    </View>
  );
}
