
import { useRouter } from 'expo-router';
import {
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
    seats: 4,
    price: 'Rs. 12,000 / month',
    icon: '🚐',
  },
  {
    id: '2',
    name: 'School Three-Wheeler',
    driver: 'Nimal Silva',
    route: 'Negombo → Ja-Ela',
    seats: 2,
    price: 'Rs. 8,000 / month',
    icon: '🛺',
  },
  {
    id: '3',
    name: 'School Car',
    driver: 'Saman Fernando',
    route: 'Wattala → Colombo',
    seats: 3,
    price: 'Rs. 15,000 / month',
    icon: '🚗',
  },
];

export default function TransportScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Transport</Text>
      <Text style={styles.subtitle}>
        Explore transport options for your child
      </Text>

      <TextInput
        style={styles.search}
        placeholder="Search by route or vehicle..."
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        {vehicles.map((vehicle) => (
          <View key={vehicle.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.vehicleIcon}>{vehicle.icon}</Text>

              <View style={styles.vehicleInfo}>
                <Text style={styles.vehicleName}>
                  {vehicle.name}
                </Text>
                <Text style={styles.driver}>
                  Driver: {vehicle.driver}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.detail}>
              📍 Route: {vehicle.route}
            </Text>
            <Text style={styles.detail}>
              💺 Available seats: {vehicle.seats}
            </Text>
            <Text style={styles.price}>{vehicle.price}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                router.push({
                  pathname: '/subscription',
                  params: { vehicleId: vehicle.id },
                })
              }
            >
              <Text style={styles.buttonText}>
                View Subscription
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>
            ← Back to Dashboard
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
    paddingTop: 55,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A5F',
  },
  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 6,
    marginBottom: 20,
  },
  search: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    marginBottom: 18,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 17,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E1E5EB',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vehicleIcon: {
    fontSize: 38,
    marginRight: 14,
  },
  vehicleInfo: {
    flex: 1,
  },
  vehicleName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1E3A5F',
  },
  driver: {
    fontSize: 13,
    color: '#666666',
    marginTop: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 13,
  },
  detail: {
    fontSize: 14,
    color: '#444444',
    marginBottom: 9,
  },
  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#16804A',
    marginTop: 4,
    marginBottom: 13,
  },
  button: {
    backgroundColor: '#1E3A5F',
    padding: 13,
    borderRadius: 9,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  backButton: {
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
  },
  backText: {
    color: '#1E3A5F',
    fontWeight: '600',
  },
});
