import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SteinerHeader } from '@/components/SteinerHeader';

type DataPoint = { time: string; value: number };

const CHART_HEIGHT = 160;
const CHART_BAR_COUNT = 30;

export default function WorldLineScreen() {
  const [data, setData] = useState<DataPoint[]>(() =>
    Array.from({ length: CHART_BAR_COUNT }, (_, i) => ({
      time: i === CHART_BAR_COUNT - 1 ? 'now' : `${CHART_BAR_COUNT - 1 - i}h`,
      value: 50 + Math.random() * 40,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const next = [...prev.slice(1)];
        const last = prev[prev.length - 1]?.value ?? 70;
        const newValue = Math.max(20, Math.min(100, last + (Math.random() - 0.5) * 18));
        next.push({ time: 'now', value: newValue });
        return next;
      });
    }, 520);
    return () => clearInterval(interval);
  }, []);

  const bars = useMemo(
    () => data.map((p) => Math.max(4, (p.value / 100) * (CHART_HEIGHT - 24))),
    [data]
  );

  // Y-axis labels based on current data range
  const yLabels = [100, 75, 50, 25, 0];

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <SteinerHeader />
      <ScrollView style={s.scroll} contentContainerStyle={s.content}>
        <View style={s.card}>
          {/* Title row */}
          <View style={s.titleRow}>
            <Text style={s.cardTitle}>WORLD LINE DIVERGENCE LOG</Text>
            <View style={s.liveIndicator} />
          </View>

          {/* Chart area */}
          <View style={s.chartContainer}>
            {/* Grid lines */}
            {yLabels.map((y) => (
              <View
                key={y}
                style={[
                  s.gridLine,
                  {
                    bottom: (y / 100) * (CHART_HEIGHT - 24) + 24,
                  },
                ]}
              >
                <Text style={s.yLabel}>{y}</Text>
              </View>
            ))}

            {/* Bars */}
            <View style={s.barsRow}>
              {bars.map((height, i) => (
                <View key={i} style={s.barWrapper}>
                  <View
                    style={[
                      s.bar,
                      {
                        height,
                        shadowColor: '#FF8C00',
                        shadowOpacity: 0.6,
                        shadowRadius: 4,
                        shadowOffset: { width: 0, height: 0 },
                      },
                    ]}
                  />
                </View>
              ))}
            </View>

            {/* X-axis labels */}
            <View style={s.xAxisRow}>
              <Text style={s.xLabel}>12h</Text>
              <Text style={s.xLabel}>8h</Text>
              <Text style={s.xLabel}>4h</Text>
              <Text style={s.xLabel}>now</Text>
            </View>
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
    padding: 16,
    paddingTop: 18,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },
  cardTitle: {
    color: 'rgba(255, 140, 0, 0.6)',
    fontSize: 11,
    letterSpacing: 3,
  },
  liveIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF8C00',
    shadowColor: '#FF8C00',
    shadowOpacity: 0.9,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
  chartContainer: {
    height: CHART_HEIGHT,
    backgroundColor: '#050505',
    borderWidth: 1,
    borderColor: 'rgba(255, 140, 0, 0.15)',
    position: 'relative',
    overflow: 'hidden',
  },
  gridLine: {
    position: 'absolute',
    left: 28,
    right: 0,
    height: 1,
    backgroundColor: 'rgba(255, 140, 0, 0.07)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  yLabel: {
    position: 'absolute',
    left: -28,
    color: 'rgba(255, 140, 0, 0.35)',
    fontSize: 9,
    fontFamily: 'SpaceMono',
    width: 24,
    textAlign: 'right',
  },
  barsRow: {
    position: 'absolute',
    left: 32,
    right: 4,
    bottom: 22,
    top: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  barWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '85%',
    backgroundColor: '#FF8C00',
    opacity: 0.75,
    borderRadius: 1,
  },
  xAxisRow: {
    position: 'absolute',
    bottom: 3,
    left: 32,
    right: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  xLabel: {
    color: 'rgba(255, 140, 0, 0.35)',
    fontSize: 9,
    fontFamily: 'SpaceMono',
  },
});
