import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ParentScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome, Parent 👋</Text>
          <Text style={styles.title}>SchoolRide</Text>
        </View>

        <Text style={styles.headerIcon}>🚐</Text>
      </View>

      <Text style={styles.sectionTitle}>Parent Dashboard</Text>

      <View style={styles.grid}>
        <TouchableOpacity 
            style={styles.card}
            onPress={() => router.push('/students')}
            >
          <Text style={styles.cardIcon}>👦</Text>
          <Text style={styles.cardTitle}>My Students</Text>
          <Text style={styles.cardText}>
            Add and manage your children
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.card}
        onPress={() => router.push('/locations')}
        >
          <Text style={styles.cardIcon}>📍</Text>
          <Text style={styles.cardTitle}>Locations</Text>
          <Text style={styles.cardText}>
            Manage pickup and drop locations
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
           style={styles.card}
           onPress={() => router.push('/transport')}
           >
          <Text style={styles.cardIcon}>🚐</Text>
          <Text style={styles.cardTitle}>Find Transport</Text>
          <Text style={styles.cardText}>
            Find available school vehicles
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.card}
        onPress={() => router.push('/subscription')}
        >
          <Text style={styles.cardIcon}>📅</Text>
          <Text style={styles.cardTitle}>Subscription</Text>
          <Text style={styles.cardText}>
            Manage your monthly transport
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => router.replace('/login')}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  header: {
    marginTop: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  greeting: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A5F',
  },

  headerIcon: {
    fontSize: 42,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 15,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },

  cardIcon: {
    fontSize: 35,
    marginBottom: 12,
  },

  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 6,
  },

  cardText: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },

  logoutButton: {
    marginTop: 15,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1E3A5F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#1E3A5F',
    fontSize: 16,
    fontWeight: 'bold',
  },
});