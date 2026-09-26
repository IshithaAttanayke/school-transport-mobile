import { useRouter } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function RoleScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🚐</Text>

      <Text style={styles.title}>Choose Your Role</Text>

      <Text style={styles.subtitle}>
        How will you use SchoolRide?
      </Text>

      <TouchableOpacity
        style={styles.roleCard}
        onPress={() => router.push('/parent')}
      >
        <Text style={styles.roleIcon}>👨‍👩‍👧</Text>

        <View style={styles.roleContent}>
          <Text style={styles.roleTitle}>Parent</Text>
          <Text style={styles.roleDescription}>
            Find and manage school transportation for your child.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.roleCard}
        onPress={() => router.push('/driver')}
      >
        <Text style={styles.roleIcon}>🚐</Text>

        <View style={styles.roleContent}>
          <Text style={styles.roleTitle}>Driver</Text>
          <Text style={styles.roleDescription}>
            Manage your vehicle, routes, and students.
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  icon: {
    fontSize: 55,
    marginBottom: 10,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 30,
    textAlign: 'center',
  },

  roleCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },

  roleIcon: {
    fontSize: 40,
    marginRight: 15,
  },

  roleContent: {
    flex: 1,
  },

  roleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 5,
  },

  roleDescription: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },

  backText: {
    color: '#1E3A5F',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
  },
});