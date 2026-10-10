
import { useRouter } from 'expo-router';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function LocationsScreen() {
  const router = useRouter();

  const handleSave = () => {
    Alert.alert(
      'Location Details',
      'Location form completed. Saving to the database will be added later.'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📍</Text>

      <Text style={styles.title}>Pickup & Drop</Text>

      <Text style={styles.subtitle}>
        Enter the locations for your child's school journey.
      </Text>

      <Text style={styles.label}>Pickup Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter home address"
      />

      <Text style={styles.label}>Drop Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter school address"
      />

      <Text style={styles.label}>Additional Instructions</Text>
      <TextInput
        style={[styles.input, styles.multiline]}
        placeholder="Nearby landmark or special instructions"
        multiline
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save Locations</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backText}>← Back to Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    padding: 20,
  },
  icon: {
    fontSize: 45,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A5F',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 25,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1E3A5F',
    marginBottom: 7,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    height: 50,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginBottom: 16,
  },
  multiline: {
    height: 85,
    paddingTop: 12,
    textAlignVertical: 'top',
  },
  button: {
    height: 52,
    backgroundColor: '#1E3A5F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backText: {
    color: '#1E3A5F',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
});