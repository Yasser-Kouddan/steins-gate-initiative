import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function SteinerHeader() {
  const [clock, setClock] = useState(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <FontAwesome name="rss" size={20} color="#FF8C00" style={styles.icon} />
        <View>
          <Text style={styles.title}>STEINER-GATE</Text>
          <Text style={styles.subtitle}>OPERATION</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.cernLabel}>CERN LHC</Text>
        <Text style={styles.time}>{clock.toLocaleTimeString()}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0a0a0a',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(0, 83, 161, 0.45)',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    opacity: 0.9,
  },
  title: {
    fontSize: 17,
    letterSpacing: 3,
    color: '#FF8C00',
    fontFamily: 'SpaceMono',
    textShadowColor: '#FF8C00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  subtitle: {
    fontSize: 9,
    letterSpacing: 5,
    color: '#0053A1',
    marginTop: 3,
  },
  right: {
    alignItems: 'flex-end',
  },
  cernLabel: {
    fontSize: 10,
    color: 'rgba(255, 140, 0, 0.6)',
    letterSpacing: 1,
  },
  time: {
    fontSize: 10,
    color: 'rgba(255, 140, 0, 0.4)',
    fontFamily: 'SpaceMono',
    marginTop: 2,
  },
});
