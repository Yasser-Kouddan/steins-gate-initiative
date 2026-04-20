import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SteinerHeader } from '@/components/SteinerHeader';

type NewsItem = {
  id: string;
  headline: string;
  timestamp: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    headline: 'LHC achieves record luminosity in proton-proton collisions',
    timestamp: '2h ago',
  },
  {
    id: '2',
    headline: 'New exotic particle candidate detected in ATLAS experiment',
    timestamp: '5h ago',
  },
  {
    id: '3',
    headline: 'Beam energy successfully ramped to 6.8 TeV',
    timestamp: '8h ago',
  },
  {
    id: '4',
    headline: 'Higgs boson decay patterns show expected behavior',
    timestamp: '12h ago',
  },
  {
    id: '5',
    headline: 'CMS detector reports anomalous signal in B-meson sector',
    timestamp: '18h ago',
  },
  {
    id: '6',
    headline: 'Scheduled maintenance completed ahead of schedule',
    timestamp: '1d ago',
  },
];

export default function NewsScreen() {
  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <SteinerHeader />
      <ScrollView style={s.scroll} contentContainerStyle={s.content}>
        <View style={s.card}>
          <Text style={s.sectionTitle}>CERN LABORATORY NEWS</Text>
          {NEWS_ITEMS.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.65}
              style={[s.newsRow, index === NEWS_ITEMS.length - 1 && s.newsRowLast]}
            >
              <View style={s.leftBorder} />
              <View style={s.rowContent}>
                <View style={s.rowInner}>
                  <FontAwesome
                    name="angle-right"
                    size={16}
                    color="rgba(255, 140, 0, 0.55)"
                    style={s.chevron}
                  />
                  <View style={s.textBlock}>
                    <Text style={s.headline}>{item.headline}</Text>
                    <Text style={s.timestamp}>{item.timestamp}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
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
    paddingTop: 18,
    paddingBottom: 4,
  },
  sectionTitle: {
    color: 'rgba(255, 140, 0, 0.55)',
    fontSize: 11,
    letterSpacing: 3,
    marginBottom: 12,
    paddingHorizontal: 16,
  },

  newsRow: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 140, 0, 0.08)',
  },
  newsRowLast: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 140, 0, 0.08)',
  },
  leftBorder: {
    width: 3,
    backgroundColor: 'rgba(255, 140, 0, 0.22)',
  },
  rowContent: {
    flex: 1,
    paddingVertical: 14,
    paddingRight: 14,
  },
  rowInner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 12,
    gap: 10,
  },
  chevron: {
    marginTop: 2,
  },
  textBlock: { flex: 1 },
  headline: {
    color: 'rgba(255, 140, 0, 0.8)',
    fontSize: 13,
    lineHeight: 20,
  },
  timestamp: {
    color: 'rgba(255, 140, 0, 0.3)',
    fontFamily: 'SpaceMono',
    fontSize: 10,
    marginTop: 5,
    letterSpacing: 1,
  },
});
