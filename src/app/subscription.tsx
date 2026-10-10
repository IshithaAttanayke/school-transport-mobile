
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const vehicles = [
  {
    id: '1',
    name: 'School Van',
    driver: 'Kamal Perera',
    route: 'Negombo → Colombo',
    price: 12000,
  },
  {
    id: '2',
    name: 'School Three-Wheeler',
    driver: 'Nimal Silva',
    route: 'Negombo → Ja-Ela',
    price: 8000,
  },
  {
    id: '3',
    name: 'School Car',
    driver: 'Saman Fernando',
    route: 'Wattala → Colombo',
    price: 15000,
  },
];

export default function SubscriptionScreen() {
  const router = useRouter();
  const { vehicleId } = useLocalSearchParams<{ vehicleId: string }>();

  const vehicle =
    vehicles.find((item) => item.id === vehicleId) ?? vehicles[0];

  const [studentName, setStudentName] = useState('');
  const [startDate, setStartDate] = useState('');

  const handleConfirm = () => {
    if (!studentName.trim() || !startDate.trim()) {
      Alert.alert(
        'Missing Information',
        'Please enter the student name and start date.'
      );
      return;
    }

    Alert.alert(
      'Request Prepared',
      `Vehicle: ${vehicle.name}\nStudent: ${studentName}\nStart date: ${startDate}\nMonthly fee: Rs. ${vehicle.price.toLocaleString()}\n\nThis is a demo. No subscription or payment has been created.`,
      [{ text: 'OK', onPress: () => router.back() }]
    );
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.icon}>📅</Text>
      <Text style={styles.title}>Monthly Subscription</Text>
      <Text style={styles.subtitle}>
        Review the transport details before continuing.
      </Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Selected Vehicle</Text>
        <Text style={styles.vehicleName}>{vehicle.name}</Text>
        <Text style={styles.detail}>Driver: {vehicle.driver}</Text>
        <Text style={styles.detail}>Route: {vehicle.route}</Text>

        <View style={styles.divider} />

        <Text style={styles.priceLabel}>Monthly fee</Text>
        <Text style={styles.price}>
          Rs. {vehicle.price.toLocaleString()}
        </Text>
      </View>

      <Text style={styles.label}>Student Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter student name"
        value={studentName}
        onChangeText={setStudentName}
      />

      <Text style={styles.label}>Subscription Start Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD (e.g. 2026-11-01)"
        value={startDate}
        onChangeText={setStartDate}
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleConfirm}
      >
        <Text style={styles.buttonText}>Review Subscription</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>← Back to Transport</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  content: {
    padding: 20,
    paddingTop: 55,
    paddingBottom: 35,
  },
  icon: {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#1E3A5F',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 22,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E1E5EB',
    marginBottom: 22,
  },
  sectionTitle: {
    color: '#1E3A5F',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  vehicleName: {
    color: '#1E3A5F',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    color: '#555555',
    fontSize: 14,
    marginBottom: 7,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 13,
  },
  priceLabel: {
    color: '#666666',
    fontSize: 14,
  },
  price: {
    color: '#16804A',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },
  label: {
    color: '#1E3A5F',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 7,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginBottom: 17,
    fontSize: 15,
  },
  button: {
    height: 52,
    backgroundColor: '#1E3A5F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  backButton: {
    alignItems: 'center',
    padding: 16,
  },
  backText: {
    color: '#1E3A5F',
    fontWeight: '600',
    fontSize: 15,
  },
});
