import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>🚐</Text>

        <Text style={styles.title}>SchoolRide</Text>

        <Text style={styles.subtitle}>
          Safe & Reliable{'\n'}School Transportation
        </Text>

        <Text style={styles.description}>
          Find trusted transportation for your child
          and manage their monthly school travel.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/login')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    width: '90%',
    alignItems: 'center',
  },

  icon: {
    fontSize: 80,
    marginBottom: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 35,
  },

  button: {
    width: '80%',
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#1E3A5F',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});