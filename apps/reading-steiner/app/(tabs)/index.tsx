import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SteinerHeader } from '@/components/SteinerHeader';

type StatusLabel = 'STABLE BEAMS' | 'INJECTION' | 'RAMPING';
const STATUS_OPTIONS: StatusLabel[] = ['STABLE BEAMS', 'INJECTION', 'RAMPING'];

export default function DashboardScreen() {
  const [momentum, setMomentum] = useState(6500.49);
  const [beamIntensity, setBeamIntensity] = useState(2.947);
  const [status, setStatus] = useState<StatusLabel>('INJECTION');

  useEffect(() => {
    const interval = setInterval(() => {
      setMomentum((prev) => prev + (Math.random() - 0.5) * 2);
      setBeamIntensity((prev) =>
        Math.max(2.5, Math.min(3.2, prev + (Math.random() - 0.5) * 0.05))
      );
      if (Math.random() < 0.05) {
        setStatus(STATUS_OPTIONS[Math.floor(Math.random() * STATUS_OPTIONS.length)]);
      }
    }, 160);
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <SteinerHeader />
      <ScrollView style={s.scroll} contentContainerStyle={s.content}>
        <View style={s.card}>
          <View style={s.statusChip}>
            <Text style={s.statusText}>{status}</Text>
          </View>
          <View style={s.telemetryBlock}>
            <Text style={s.label}>BEAM MOMENTUM</Text>
            <Text style={s.nixieValue}>{momentum.toFixed(2)}</Text>
            <Text style={s.unit}>GeV/c</Text>
          </View>
          <View style={[s.telemetryBlock, { marginBottom: 0 }]}>
            <Text style={s.label}>BEAM INTENSITY</Text>
            <Text style={s.nixieValue}>{beamIntensity.toFixed(3)}</Text>
            <Text style={s.unit}>×10¹⁴ protons</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#121212' },
  scroll: { flex: 1 },
  content: { padding: 16, paddingTop: 20 },
  card: {
    borderWidth: 2,
    borderColor: 'rgba(255, 140, 0, 0.22)',
    backgroundColor: '#0a0a0a',
    padding: 20,
    paddingTop: 24,
  },
  statusChip: {
    alignSelf: 'flex-start',
    borderWidth: 2,
    borderColor: '#FF8C00',
    backgroundColor: 'rgba(255, 140, 0, 0.06)',
    paddingHorizontal: 18,
    paddingVertical: 9,
    marginBottom: 30,
  },
  statusText: {
    color: '#FF8C00',
    fontFamily: 'SpaceMono',
    fontSize: 12,
    letterSpacing: 4,
    textShadowColor: '#FF8C00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  telemetryBlock: { marginBottom: 26 },
  label: {
    color: 'rgba(255, 140, 0, 0.55)',
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 10,
  },
  nixieValue: {
    color: '#FF8C00',
    fontFamily: 'SpaceMono',
    fontSize: 56,
    letterSpacing: 2,
    textShadowColor: '#FF8C00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
  unit: {
    color: 'rgba(255, 140, 0, 0.55)',
    fontSize: 13,
    marginTop: 6,
  },
});



