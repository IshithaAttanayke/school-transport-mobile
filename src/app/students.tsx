import { useRouter } from 'expo-router';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function StudentsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>👦</Text>

      <Text style={styles.title}>My Students</Text>

      <Text style={styles.subtitle}>
        Add your child to manage their school transportation
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Student Name"
      />

      <TextInput
        style={styles.input}
        placeholder="School Name"
      />

      <TextInput
        style={styles.input}
        placeholder="Grade"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Student</Text>
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
    alignItems: 'center',
    padding: 20,
  },

  icon: {
    fontSize: 55,
    marginBottom: 10,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E3A5F',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 25,
  },

  input: {
    width: '100%',
    height: 52,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },

  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#1E3A5F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  backText: {
    color: '#1E3A5F',
    fontSize: 15,
    fontWeight: '600',
  },
});