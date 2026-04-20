import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SteinerHeader } from '@/components/SteinerHeader';

const DOT_COUNT = 14;

export default function ProfileScreen() {
  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <SteinerHeader />
      <ScrollView style={s.scroll} contentContainerStyle={s.content}>
        {/* Outer border card */}
        <View style={s.outerCard}>
          {/* Inner border */}
          <View style={s.innerCard}>
            {/* Header row */}
            <View style={s.headerRow}>
              <View>
                <Text style={s.cernLabel}>CERN LABORATORY</Text>
                <Text style={s.idTitle}>IDENTIFICATION CARD</Text>
              </View>
              <View style={s.avatarCircle}>
                <FontAwesome name="user" size={26} color="#FF8C00" />
              </View>
            </View>

            <View style={s.divider} />

            {/* Member number */}
            <View style={s.field}>
              <Text style={s.fieldLabel}>MEMBER No.</Text>
              <Text style={s.memberNumber}>001</Text>
            </View>

            {/* Name */}
            <View style={s.field}>
              <Text style={s.fieldLabel}>OPERATOR NAME</Text>
              <Text style={s.name}>Okabe Rintarou</Text>
            </View>

            {/* Role */}
            <View style={s.field}>
              <Text style={s.fieldLabel}>CLEARANCE LEVEL</Text>
              <Text style={s.role}>LAB CHIEF</Text>
            </View>

            {/* Serial dot row */}
            <View style={s.dotDivider} />
            <View style={s.dotRow}>
              {Array.from({ length: DOT_COUNT }).map((_, i) => (
                <View key={i} style={s.dot} />
              ))}
            </View>
          </View>
        </View>

        {/* Authorized stamp — outside inner card, overlapping bottom-right */}
        <View style={s.stampWrapper}>
          <View style={s.stamp}>
            <Text style={s.stampText}>AUTHORIZED</Text>
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

  outerCard: {
    borderWidth: 2,
    borderColor: 'rgba(255, 140, 0, 0.4)',
    backgroundColor: '#111111',
    padding: 4,
  },
  innerCard: {
    borderWidth: 1,
    borderColor: 'rgba(255, 140, 0, 0.18)',
    padding: 20,
    paddingTop: 22,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  cernLabel: {
    color: '#0053A1',
    fontSize: 10,
    letterSpacing: 3,
  },
  idTitle: {
    color: '#FF8C00',
    fontFamily: 'SpaceMono',
    fontSize: 14,
    letterSpacing: 2,
    marginTop: 4,
    textShadowColor: '#FF8C00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
  avatarCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 2,
    borderColor: '#FF8C00',
    backgroundColor: 'rgba(255, 140, 0, 0.06)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 140, 0, 0.18)',
    marginTop: 20,
    marginBottom: 24,
  },

  field: { marginBottom: 24 },
  fieldLabel: {
    color: 'rgba(255, 140, 0, 0.5)',
    fontSize: 10,
    letterSpacing: 3,
    marginBottom: 8,
  },
  memberNumber: {
    color: '#FF8C00',
    fontFamily: 'SpaceMono',
    fontSize: 48,
    letterSpacing: 8,
    textShadowColor: '#FF8C00',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 16,
  },
  name: {
    color: '#FF8C00',
    fontSize: 20,
    letterSpacing: 1,
  },
  role: {
    color: '#0053A1',
    fontFamily: 'SpaceMono',
    fontSize: 13,
    letterSpacing: 4,
  },

  dotDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 140, 0, 0.18)',
    marginBottom: 14,
  },
  dotRow: {
    flexDirection: 'row',
    gap: 6,
    opacity: 0.35,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#FF8C00',
  },

  stampWrapper: {
    alignItems: 'flex-end',
    marginTop: -10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  stamp: {
    borderWidth: 1,
    borderColor: '#FF8C00',
    paddingHorizontal: 10,
    paddingVertical: 4,
    opacity: 0.2,
    transform: [{ rotate: '-12deg' }],
  },
  stampText: {
    color: '#FF8C00',
    fontFamily: 'SpaceMono',
    fontSize: 11,
    letterSpacing: 3,
  },
});
